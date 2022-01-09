class DressesController < ApplicationController

    def index 
        if session [:user_id]
            dress = Dress.all
            render json: dress , status: :ok
        else
            render json: {errors: "Must be logged in to view dresses."}, status: :unauthorized
        end
    end

    # def show
    #     if session[:user_id]
    #         dress = Dress.find(params[:id])
    #         if dress
    #             render json: dress, status: :ok
    #         else
    #             render json: {errors: ["Dress can't be found."]}
    #         end
    #     else
    #         render json: {errors: "Dress doesnt exist."}, status: :unprocessable_entity
    #     end
    # end
end
