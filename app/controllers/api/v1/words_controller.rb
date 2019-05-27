class Api::V1::WordsController < ApplicationController

  def index
    words = Word.all
    render json: words
  end

  def show
    word = Word.all.find_by(text: params[:id])
    render json: word
  end

  def create
    binding.pry
    word = Word.all.find_by(text: params[:id])
    unless word
      # access the payload through params
      # create Word and Option objects
    end
  end

  private
  def word_params
    params.require(:word).permit(:text)
  end
end
