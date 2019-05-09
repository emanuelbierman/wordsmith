import React, { Component } from 'react';

class Word extends Component {

  state = {
    text: this.props.word.text,
    examples: {
      synonyms: []
    },
    expandWord: false
  }

  toggleExpansion = event => {
    fetchWord(word);
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
      <li onClick={this.swapWord(synonym)}>synonym</li>
    })}</ul>`;
    event.target.append(synonymsString);
  }

  swapWord = (text, event) => {
    this.setState({text: text, expandWord: false});
  }

  componentDidMount() {

  }

  render() {
    let examples;
    let exampleString;
    let examplesMenu

    if (this.state.expandWord) {
      exampleString = <p>Choose the sense that best fits your intended use:</p>
      examples = this.state.examples.map(example => {
        <p id={example.id} onClick={(event) => this.addSynonyms(example.synonyms, event)}>example.text</p>
      });
    } else {
      exampleString = '';
      examples = '';
    }

    return(
      <div>
        <h4 id={this.props.id} onClick={this.toggleExpansion}>{this.state.text}</h4>
        {exampleString}
        {examples}
      </div>
    )
  }
}
