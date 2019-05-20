import React, { Component } from 'react';

class WordOption extends Component {

  // const example = this.props.example;

  state = {
    expand: true
  }

  toggleExpand = () => {
    if (this.props.expanded === false) {
      this.props.expandWord(this.props.wordId);
    }
  }

  swap = synonym => {
    this.props.replaceWord(this.props.wordId, synonym);
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.expanded !== prevProps.expanded) {
  //     this.setState({expand: true})
  //   }
  // }

  render() {
    let synonyms;
    if (this.props.isFetched) {
      synonyms = this.props.example.synonyms.map((synonym, index) => {
        return <li>{synonym}</li>
      });
    } else {
      synonyms = '';
    }
    return(
      <div>
        <p onClick={this.toggleExpand}>
          {this.props.example.usage}:      {this.props.example.sense}
        </p>
        <ul>{synonyms}</ul>
      </div>
    );
  };
};

export default WordOption;
