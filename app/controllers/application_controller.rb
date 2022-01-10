class ApplicationController < ActionController::API
    include ActionController::Cookies
    private 

    def logged_in? 
        !!session[:user_id]
    end

    def current_user    
        User.find(session[:user_id]) if logged_in?
    end
end
