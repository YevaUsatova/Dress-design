class SessionsController < ApplicationController
    def create
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            
            render json: user, status: :ok
        else
            render json: {erroes: "Invalid username or password"}
        end
    end
    def destroy
        session.clear
        render json: {}, status: :ok
    end
end
