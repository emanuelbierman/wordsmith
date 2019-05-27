import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Button, Input } from 'reactstrap';

class SearchBar extends Component {

  state = {
    input: ''
  }

  handleChange = event => {
    this.setState({input: event.target.value})
  }

  addWordsFn = () => {
    // words should be lowercase, stripped of whitespace, and longer than 2 characters
    let words = this.state.input;
    this.props.addWords(words);
  }

  componentDidMount() {
    {/* return this.interval = setInterval(this.addWordsFn, 2000); */}
    {/* Bind the addWords function so it doesnt lose its context within the setInterval function */}
  }

  componentWillUnmount() {
    {/* clearInterval(this.interval); */}
  }

  render() {
    return(
      <Container className="text-info">
        <h4>Wordsmith</h4>
        <Container>
          <Input type="text" value={this.state.input} onChange={this.handleChange} placeholder="start typing or paste any text:" /><Button outline color="info" onClick={this.addWordsFn}>Submit</Button>
        </Container>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addWords: words => dispatch({type: 'ADD_WORDS', words: words})
  }
}

export default connect(null, mapDispatchToProps)(SearchBar);
