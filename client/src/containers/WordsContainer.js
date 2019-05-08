import React, { Component } from 'react';
import { connect } from 'react-redux';
import Words from '../components/Words';

class WordsContainer from Component {

  state = {
    words: []
  }

  render() {
    return(
      <div>
        <Words words={this.props.words}/>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return words: state.words;
}

const mapDispatchToProps = dispatch => {
  return {
    replaceWord: id => dispatch({type: 'REPLACE_WORD', payload: 'word' )})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WordsContainer);
