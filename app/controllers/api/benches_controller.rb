class Api::BenchesController < ApplicationController
    def index
        @benches = Bench.all
        render :index
    end

    def create
        debugger
        @bench = Bench.new(bench_params)
        if @bench.save
            render :show
        else
            render json: @bench.errors.full_messages, status: 422 
        end

    end

    def show
        @bench = Bench.find_by(id: params[:id])
        render :show
    end

    def bench_params
        params.require(:bench).permit(:title, :description, :price, :seating, :lat, :lng)
    end
end
