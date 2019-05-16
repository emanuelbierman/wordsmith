import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchBar extends Component {

  state = {
    input: ''
  }

  handleChange = event => {
    this.setState({input: event.target.value})
  }

  addWordsFn = () => {
    // words should be lowercase, stripped of whitespace, and longer than 2 characters
    let words = this.state.input.toLowerCase().concat(' ').split(' ').filter(word => word.length > 2);
    debugger;
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
    return(<div>
        Start typing into the search bar:
        <input type="text" id="text" value={this.state.input} onChange={this.handleChange}/>
        <input type="submit" onClick={this.addWordsFn} value="Submit"/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addWords: words => dispatch({type: 'ADD_WORDS', words: words})
  }
}

export default connect(null, mapDispatchToProps)(SearchBar);
