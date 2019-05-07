class API::V1::PinnedSentencesController < ApplicationController

  @results = [
      {
        "id": "example",
        "language": "en",
        "lexicalEntries": [
          {
            "inflectionOf": [
              {
                "id": "example",
                "text": "example"
              }
            ],
            "language": "en",
            "lexicalCategory": {
              "id": "verb",
              "text": "Verb"
            },
            "text": "example"
          },
          {
            "inflectionOf": [
              {
                "id": "example",
                "text": "example"
              }
            ],
            "language": "en",
            "lexicalCategory": {
              "id": "noun",
              "text": "Noun"
            },
            "text": "example"
          }
        ],
        "word": "example"
      }
    ]

  def index
    respond_to do |format|
      # format.html { render 'index' }
      format.json { render json: @results, status: 200 }
    end
  end
end
