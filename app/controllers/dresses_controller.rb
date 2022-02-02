class DressesController < ApplicationController

    def index
        render json: Dress.all
    end
    

    def destroy
        dress = Dress.find(params[:id])
        dress.delete
        render json: {}
    end


    def create
        user = User.find(session[:user_id])
        dress = user.dresses.find_or_create_by(dress_params)
        render json: dress, status: :created
    end

    def increment_like
        dress = Dress.find_by(id: params[:id])
        if dress
            dress.update(likes: dress.likes + 1)
            render json: dress
        else
            render json: {error: "Dress not found"}, status: :not_found
        end
    end

   private
   def dress_params
    params.require(:dress).permit(:name, :textile, :features, :designer)
   end
    
end
