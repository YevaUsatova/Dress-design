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
        dress = Dress.find_or_create_by(dress_params)
        render json: dress, status: :created
    end

    def update
        dress = Dress.find_by(id: params[:id])
        if dress
            dress.update(dress_params)
            render json: dress
        else
            render json: {error: "Dress not found"}, status: :not_foubd
        end
    end

   private
   def dress_params
    params.permit(:name, :textile, :features, :designer, :likes)
   end
    

#    name: params[:name], textile: params[:textile], features: params[:features], designer: params[:designer]
 
end
