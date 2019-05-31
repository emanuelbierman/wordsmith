import React, { Component } from 'react';
import Synonym from './Synonym';
import { Row, Card } from 'reactstrap';

class WordOption extends Component {

  // const option = this.props.option;

  state = {
    expand: false
  }

  toggleExpand = () => {
    this.setState(state => ({
      expand: !state.expand
    }));
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
    if (this.state.expand && this.props.option.synonyms.length > 0) {
      synonyms = this.props.option.synonyms.map((synonym, index) => {
        return <Synonym synonym={synonym} key={index} swapText={this.props.swapText}/>
      });
    } else {
      synonyms = '';
    }
    return(
      <Card body outline color="info">
        <p onClick={this.toggleExpand}>
          {this.props.option.usage}:      {this.props.option.sense}
        </p>
        <ul>{synonyms}</ul>
      </Card>
    );
  };
};

export default WordOption;
