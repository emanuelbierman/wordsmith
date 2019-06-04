import React, { Component } from 'react';
import { connect } from 'react-redux';
import WordsInput from '../components/WordsInput';

class WordsInputContainer extends Component {

  render() {
    return(
      <>
        <WordsInput addWords={this.props.addWords}/>
      </>
    )
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addWords: words => dispatch({type: 'ADD_WORDS', words: words})
  }
}

export default connect(null, mapDispatchToProps)(WordsInputContainer);
