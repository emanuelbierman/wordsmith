import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchBar extends Component {

  state = {
    input: ''
  }

  handleChange = event => {
    this.setState({input: event.target.value})
  }

  render() {
    return(<div>
        Start typing:
        <input type="text" id="text" value={this.state.input} onChange={this.handleChange}>
        <input type="submit" value="Reset">
      </div>
    );
  }
}

const mapStateToProps = state => {
  return words: state.words.split(' ').filter(word => word.length > 2);
}

const mapDispatchToProps = dispatch => {
  return {
    addWords: words => dispatch({type: 'ADD_WORDS', payload: words})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
