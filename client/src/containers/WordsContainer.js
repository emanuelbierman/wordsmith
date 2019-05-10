import React, { Component } from 'react';
import { connect } from 'react-redux';
import Words from '../components/Words';

class WordsContainer extends Component {

  render() {
    return(
      <div>
        <Words words={this.props.words}, replaceWord={this.props.replaceWord}/>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return words: state.words;
}

const mapDispatchToProps = dispatch => {
  return {
    replaceWord: (originalText, newText) => dispatch({type: 'REPLACE_WORD', payload: {id: id, originalText: originalText, newText: newText }})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WordsContainer);
