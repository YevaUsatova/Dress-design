class DressesController < ApplicationController

    def index
        dress = Dress.all
        render json: dress
    end

    # def index
    #     if params [:user_id]
    #         if logged_in?
    #          render json: Dress.all 
    #         else
    #             render json: {errors: "Must be logged in to view dresses."}, status: :unauthorized
    #         end
    #     else
    #         render json:{errors: "Unauthorized access."}, status: :unauthorized
    #     end
    # end

    def show
        if session[:user_id]
            dress = Dress.all
            if dress
                render json: dress, status: :ok
            else
                render json: {errors: ["Dress can't be found."]}
            end
        else
            render json: {errors: "Dress doesnt exist."}, status: :unprocessable_entity
        end
    end
end
