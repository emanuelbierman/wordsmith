import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWord } from '../actions/wordsActions';

class Word extends Component {

  // const word = this.props.word;

  state = {
    expandWord: false
  }

  toggleExpansion = event => {
    this.props.fetchWord(this.props.word);
    {/*
      after the call to our external API, an action to update our store is dispatched
    */}
    this.setState({expandWord: true});
    {/*
      this state change will toggle the expansion of the options menu
    */}
  }

  addSynonyms = (synonyms, event) => {
    {/*
    this should be an array of synonyms but it needs formatting for display
    each display should also have a handler to swap in the new word
    */}
    let synonymsString = `<ul>{synonyms.map(synonym => {
      <li>synonym</li>
    })}</ul>`;
    event.target.append(synonyms);
  }

  swapWord = event => {
    this.props.replaceWord(this.props.word.id, this.props.word.text)
  }

  componentDidMount() {

  }

  render() {
    let examples;
    let exampleString;
    let examplesMenu

    if (this.state.expandWord) {
      exampleString = <p>Choose the sense that best fits your intended use:</p>
      examples = this.props.word.examples.map(example => {
        return <p id={example.id} onClick={(event) => this.addSynonyms(example.synonyms, event)}>example.text</p>
      });
    } else {
      exampleString = '';
      examples = '';
    }

    return(
      <div>
        <h4 id={this.props.word.id} onClick={this.toggleExpansion}>{this.props.word.text}</h4>
        {exampleString}
        {examples}
      </div>
    )
  }
}

export default connect(null, { fetchWord })(Word);
