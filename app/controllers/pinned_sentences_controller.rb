class PinnedSentencesController < ApplicationController

  def index
    @data = 'data'
    respond_to do |format|
      format.html { render 'index' }
      format.json { render json: @data, status: 200 }
    end
  end
end
