import React, { Component } from 'react';
import Word from './Word';

class Words extends Component {
  render() {
    return(
      <div>
        Then click on a word to expand it:<br></br>
        {this.props.words.map(word => <Word word={word} key={word.id}/>)}
      </div>
    )
  }
}

export default Words;
