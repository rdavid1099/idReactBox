class Api::V1::UserController < ApplicationController
  def index
    user = User.find_by(email: params[:email])
    if user
      render json: user
    # else
    #   render json: {
    #     error: 'User not found'
    #   }
    end
  end
end