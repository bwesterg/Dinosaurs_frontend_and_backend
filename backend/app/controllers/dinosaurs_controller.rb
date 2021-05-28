class DinosaursController < ApplicationController

    def index
        @dinosaurs = Dinosaur.all 
         render json: @dinosaurs
    end

    def create
        @dinosaur = Dinosaur.create(dinosaur_params)
        render json: @dinosaur
    end

    private

    def dinosaur_params
        params.require(:dinosaur).permit(:name, :image)
    end

end
