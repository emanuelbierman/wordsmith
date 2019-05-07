class ApplicationController < ActionController::API
  def index
    render json: { message: "successful", status: 200 }
  end
end
