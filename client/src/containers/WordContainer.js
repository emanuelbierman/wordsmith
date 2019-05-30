import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWord, postWord } from '../actions/wordsActions';
import WordOption from '../components/WordOption';
import { Card } from 'reactstrap';

class WordContainer extends Component {

  // const word = this.props.word;

  state = {
    text: this.props.word.text
  }

  beginFetch = () => {
    this.props.fetchWord(this.props.word);
  }

  swapText = synonym => {
    this.setState({ text: synonym })
  }

  componentDidUpdate(prevProps, prevState) {
    // if word has loaded, push to backend API
    if (this.props.word.isFetched) {
      this.props.postWord(this.props.word);
    }
  }

  render() {
    if (this.props.loading) {
      return <div>Loading...</div>
    }
    let options;
    if (!this.props.loading && this.props.word.isFetched && this.props.word.options.length > 0) {
      options = this.props.word.options.map(option => {
        return <WordOption key={option.id} option={option} isFetched={this.props.word.isFetched}
        fetchWord={this.props.fetchWord} replaceWord={this.props.replaceWord}
        swapText={this.swapText} expandWord={this.props.expandWord} wordId={this.props.word.id}/>
      });
    } else if (this.props.word.isFetched && this.props.word.options.length < 0) {
      options = 'There has been an error loading the information you requested. Try refreshing again or try another word!';
    } else {
      options = null;
    }
    return(
      <Card body outline color="info">
        <h3 onClick={this.beginFetch}>{this.state.text}</h3>
        {options}
      </Card>
    )
  }
}

export default connect(null, { fetchWord, postWord })(WordContainer);
