import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWord } from '../actions/wordsActions';
import WordOption from '../components/WordOption';

class WordContainer extends Component {

  // const word = this.props.word;

  beginFetch = () => {
    this.props.fetchWord(this.props.word);
  }

  render() {
    if (this.props.loading) {
      return <div>Loading...</div>
    }
    let expandedMessage, options;
    if (!this.props.loading && this.props.word.isFetched) {
      expandedMessage = 'Click on each usage:sense pair to find one that fits your sentence:'
      options = this.props.word.examples.map(example => {
        return <WordOption key={example.id} example={example} isFetched={this.props.word.isFetched}
        fetchWord={this.props.fetchWord} replaceWord={this.props.replaceWord} expandWord={this.props.expandWord} wordId={this.props.word.id}/>
      })
    } else {
      expandedMessage = '';
      options = '';
    }
    return(
      <div>
        <h3 onClick={this.beginFetch}>{this.props.word.text}</h3>
        {expandedMessage}
        {options}
      </div>
    )
  }
}

export default connect(null, { fetchWord })(WordContainer);
