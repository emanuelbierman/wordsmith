import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWord } from '../actions/wordsActions';
import WordOptions from './WordOptions';

class Word extends Component {

  // const word = this.props.word;

  toggleExpansion = () => {
    this.props.fetchWord(this.props.word);
  }

  render() {
    return(
      <div>
        <h3 id={this.props.word.id} onClick={this.toggleExpansion}>{this.props.word.text}</h3>
        {this.props.word.examples.map((example, index) => {
          return <WordOptions example={example} replaceWord={this.props.replaceWord} wordId={this.props.word.id} key={index} loading={this.props.loading}/>
        })}
      </div>
    )
  }
}

export default connect(null, { fetchWord })(Word);
