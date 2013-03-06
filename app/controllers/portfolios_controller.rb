class PortfoliosController < ApplicationController
before_filter :signed_in_user
before_filter :correct_user, only: [:show]

	def show
		@userportfolios = current_user.portfolios.paginate(page: params[:page])
		@portfolio = current_user.portfolios.build
		@current_portfolio = current_user.portfolios.find_by_id(params[:id])
		@asset = @current_portfolio.assets.build
		@assets =@current_portfolio.assets.paginate(page: params[:page])
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

	def create
		@portfolio = current_user.portfolios.build(params[:portfolio])
		@portfolio.save
		@userportfolios = current_user.portfolios
		render 'index'
	end
	
	private
	def correct_user
		@portfolio = current_user.portfolios.find_by_id(params[:id])
		flash[:forbidden] = "Sorry, you are not allowed to view that portfolio" if @portfolio.nil?
		redirect_to portfolios_path if @portfolio.nil?
	end

end