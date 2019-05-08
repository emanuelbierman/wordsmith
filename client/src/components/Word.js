import React, { Component } from 'react';

class Word extends Component {

  state = {
    expandWord: false
  }

  toggleExpansion = event => {
    this.setState({expandWord: true});
  }

  addSynonyms = (synonyms, event) => {
    {/*
    this should be an array of synonyms but it needs formatting for display
    each display should also have a handler to swap in the new word
    */}
    event.target.append(synonyms);
  }

  render() {
    let examples;
    let exampleString;

    if (this.state.expandWord) {
      exampleString = <p>Choose the sense that best fits your intended use:</p>
      examples = this.props.examples.map(example => {
        <p id={example.id} onClick={(event) => this.addSynonyms(example.synonyms, event)}>example.text</p>
      });
    } else {
      exampleString = '';
      examples = '';
    }

    return(
      <div>
        <h4 id={this.props.id} onClick={this.toggleExpansion}>{this.props.name}</h4>
        {exampleString}
        {examples}
      </div>
    )
  }
}
