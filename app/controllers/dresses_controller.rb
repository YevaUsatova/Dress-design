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
        dress = Dress.find_or_create_by(name: params[:name], textile: params[:textile], features: params[:features], designer: params[:designer])
        render json: dress, status: :created
    end


 
end
