class Api::V1::UserController < ApplicationController
  def index
    user = User.find_by(email: params[:email])
    if user
      render json: user
    end
  end
end