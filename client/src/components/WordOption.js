import React, { Component } from 'react';
import Synonym from './Synonym';

class WordOption extends Component {

  // const option = this.props.option;

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
      synonyms = this.props.option.synonyms.map((synonym, index) => {
        return <Synonym synonym={synonym} swapWord={this.props.swapWord}/>
      });
    } else {
      synonyms = '';
    }
    return(
      <div>
        <p onClick={this.toggleExpand}>
          {this.props.option.usage}:      {this.props.option.sense}
        </p>
        <ul>{synonyms}</ul>
      </div>
    );
  };
};

export default WordOption;
