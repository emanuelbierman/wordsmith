import React, { Component } from 'react';
import { connect } from 'react-redux';
import WordContainer from './WordContainer';

class WordsContainer extends Component {

  render() {
    return(
      <div>
        <br></br>Click on a word to expand it:<br></br>
        {this.props.words.map(word => <WordContainer word={word} key={word.id} replaceWord={this.props.replaceWord} expandWord={this.props.expandWord} loading={this.props.loading}/>)}
      </div>
    )
  };
};

const mapStateToProps = state => ({ words: state.words, loading: state.loading })

const mapDispatchToProps = dispatch => {
  return {
    replaceWord: (id, newText) => dispatch({type: 'REPLACE_WORD', payload: {id: id, newText: newText }}),
    expandWord: id => dispatch({type: 'EXPAND_WORD', payload: {id: id}})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WordsContainer);
