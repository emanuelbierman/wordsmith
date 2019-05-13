import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchBar extends Component {

  state = {
    input: 'example'
  }

  handleChange = event => {
    this.setState({input: event.target.value})
  }

  addWordsFn = () => {
    let words = this.state.input.split(' ').filter(word => word.length > 2);
    this.props.addWords(words);
  }

  componentDidMount() {
    return this.interval = setInterval(this.addWordsFn, 3000);
    {/* Bind the addWords function so it doesnt lose its context within the setInterval function */}
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return(<div>
        Start typing into the search bar:
        <input type="text" id="text" value={this.state.input} onChange={this.handleChange}/>
        <input type="submit" value="Reset"/>
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
