import React, { Component } from 'react';
import { connect } from 'react-redux';
import Word from '../components/Word';

class WordsContainer extends Component {

  render() {
    return(
      <div>
        <br></br>Click on a word to expand it:<br></br>
        {this.props.words.map(word => <Word word={word} key={word.id} replaceWord={this.props.replaceWord}/>)}
      </div>
    )
  };
};

const mapStateToProps = state => ({ words: state.words })

const mapDispatchToProps = dispatch => {
  return {
    replaceWord: (id, newText) => dispatch({type: 'REPLACE_WORD', payload: {id: id, newText: newText }})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WordsContainer);
