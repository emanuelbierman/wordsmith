import React, { Component } from 'react';

class WordOptions extends Component {

  // const example = this.props.example;

  render() {
    if (this.props.loading ) {
      return <div>Loading...</div>
    }
    return(
      <div>
        <p>
          {this.props.example.usage}:      {this.props.example.sense}
        </p>
        {this.props.example.synonyms.map(synonym => synonym)}
      </div>
    );
  };
};

export default WordOptions;
