class Api::V1::WordsController < ApplicationController

  def index
    words = Word.all
    render json: words
  end

  def show
    if Word.all.find_by(text: params[:text])
      word = Word.all.find_by(text: params[:text])
      render json: word.to_json(include: :options), status: 200
    else
      render json: {}, status: 404
    end
  end

  def create
    word = Word.find_or_create_by(text: params[:text])
    if word.options.length === 0
      # access the payload through params
      # create Option objects
      params[:word][:options].each do |option|
        Option.create! word_id: word.id, usage: option[:usage], sense: option[:sense], synonyms: option[:synonyms]
      end
      if word.options.length > 0
        # the new Word and Options were created
        render json: word.to_json(include: :options), status: 201
      else
        # the Options creation failed
        render json: {}, status: 404
      end
    else
      # the word already exists
      render json: word.to_json(include: :options), status: 200
    end
  end

  private
  def word_params
    params.require(:word).permit(:text)
  end
end
