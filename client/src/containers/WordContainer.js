import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWord, postWord } from '../actions/wordsActions';
import WordOption from '../components/WordOption';
import { Card } from 'reactstrap';

class WordContainer extends Component {

  // const word = this.props.word;

  state = {
    text: this.props.word.text,
    expandOptions: false
  }

  toggleExpandAndFetch = () => {
    this.setState(state => ({
      expandOptions: !state.expandOptions
    }));
    // only fetch if it hasn't been fetched yet
    if (!this.props.word.isFetched) {
      this.props.fetchWord(this.props.word);
    }
  }

  swapText = synonym => {
    this.setState({ text: synonym })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.word.isFetched && !this.props.word.posted) {
      // if word has loaded and hasn't already been posted, post to backend API
      this.props.postWord(this.props.word);
    }
  }

  render() {
    let options;
    if (!this.state.expandOptions) {
      options = null;
    } else if (this.state.expandOptions && this.props.loading) {
      options = <div>Loading...</div>;
    } else if (this.state.expandOptions && !this.props.word.isFetched) {
      options = <div>There has been an error loading the information you requested. Try clicking again, try another word, or refresh the page...</div>;
    } else if (this.state.expandOptions && this.props.word.isFetched) {
      options = this.props.word.options.map(option => {
        return <WordOption key={option.id} option={option} isFetched={this.props.word.isFetched}
        fetchWord={this.props.fetchWord} replaceWord={this.props.replaceWord}
        swapText={this.swapText} expandWord={this.props.expandWord} wordId={this.props.word.id}/>
      });
    }
    return(
      <Card body outline color="info">
        <h3 onClick={this.toggleExpandAndFetch}>{this.state.text}</h3>
        {options}
      </Card>
    )
  }
}

export default connect(null, { fetchWord, postWord })(WordContainer);
