module SessionsHelper
	
	def current_user
		@user ||= User.find_by_remember_token(cookies[:remember_token])
	end

	def current_user=(user)
		@current_user = user
	end


end