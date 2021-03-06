class PortfoliosController < ApplicationController
before_filter :signed_in_user
before_filter :correct_user, only: [:show, :edit, :destroy]

	def edit
		@userportfolios = current_user.portfolios.paginate(page: params[:page])
		@current_portfolio = current_user.portfolios.find_by_id(params[:id])
		@assets =@current_portfolio.assets.paginate(page: params[:page])
		@portfolio = current_user.portfolios.new
		1.times {@portfolio.assets.build}
	
	end

	def index
		if current_user.portfolios.count == 1
			redirect_to current_user.portfolios.first
		else
			@userportfolios = current_user.portfolios.paginate(page: params[:page])
			@portfolio = current_user.portfolios.build
			render 'index'
		end
	end

	def show
		@current_portfolio = current_user.portfolios.find_by_id(params[:id])
		@userportfolios = current_user.portfolios.paginate(page: params[:page])
	end

	def create
		@portfolio = current_user.portfolios.new(params[:portfolio])
		if @portfolio.save
			flash[:success] = "New Portfolio Created!"
			redirect_to portfolio_path(@portfolio.id)
		else
			@asset = Asset.new
			render 'new'
		end
	end

	def new
		@portfolio = current_user.portfolios.new
		5.times {@portfolio.assets.build}
	end

	def destroy
			@portfolio.destroy
			if current_user.portfolios.count ==0
				redirect_to new_portfolio_path
			else
				redirect_to edit_portfolio_path(current_user.portfolios.first)
			end
	end
	def update
		@current_portfolio = Portfolio.find_by_id(params[:portfolio_id])
		@current_portfolio.update_attributes(params[:portfolio])
		redirect_to edit_portfolio_path(@current_portfolio.id)
	end


	private
	def correct_user
		@portfolio = current_user.portfolios.find_by_id(params[:id])
		flash[:forbidden] = "Sorry, you are not allowed to view that portfolio" if @portfolio.nil?
		redirect_to portfolio_path(current_user.portfolios.first.id) if @portfolio.nil?
	end

	
end
