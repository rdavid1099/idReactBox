class Api::V1::UserController < ApplicationController
  def index
    user = User.find_or_create_by(email: params[:email])
    if user
      render json: user
    end
  end
end