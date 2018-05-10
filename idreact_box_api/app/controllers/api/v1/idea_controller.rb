class Api::V1::IdeaController < ApplicationController
  def index
    max = params[:max].to_i > 25 || params[:max].to_i == 0 ? 25 : params[:max]
    ideas = Idea.where(user_id: params[:user_id]).take(max)
    render json: ideas
  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
  end
end
