import React, { Component } from 'react';

class WordOptions extends Component {

  // const example = this.props.example;

  render() {
    return(
      <div>
        <p>
          {this.props.example.usage}:      {this.props.example.sense}
        </p>
        {this.props.example.synonyms.map(synonym => synonym}
      </div>
    );
  };
};

export default WordOptions;
