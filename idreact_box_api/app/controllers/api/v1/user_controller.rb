class Api::V1::UserController < ApplicationController
  def index
    user = User.find_by(email: params[:email])
    if user
      render json: user
    else
      render json: { error: 'User not found' }, status 400
    end
  end

  def create
    user = User.create(email: params[:email])
    if user.id
      render json: user
    else
      render json: user.error.messages, status 400
    end
  end
end
