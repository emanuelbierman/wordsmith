import React, { Component } from 'react';
import Word from './Word';

class Words extends Component {
  render() {
    return(
      {this.props.words.map((word) => {
        <Word word={word} key={word.id}/>
      })}
    )
  }
}

export default Words;
