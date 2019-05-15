class Api::V1::SentencesController < ApplicationController



  def index
    sentences = ''
    render json: "Hello from the Sentence API!"
  end
end
