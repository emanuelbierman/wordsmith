class Api::V1::WordsController < ApplicationController

  def index
    words = Word.all
    render json: words
  end

  def show
    word = Word.all.find_by(text: params[:id])
    render json: word
  end

  private
  def word_params
    params.require(:word).permit(:text)
  end
end
