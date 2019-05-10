import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchBar extends Component {

  state = {
    input: ''
  }

  handleChange = event => {
    this.setState({input: event.target.value})
  }

  componentDidMount() {
    {/* Set an interval to wait for three seconds, so it doesnt search too soon */}
    this.props.addWords(this.props.splicedWords);
  }

  render() {
    return(<div>
        Start typing:
        <input type="text" id="text" value={this.state.input} onChange={this.handleChange}/>
        <input type="submit" value="Reset"/>
      </div>
    );
  }
}

const mapStateToProps = state => ({ splicedWords: state.input.split(' ').filter(word => word.length > 2) })

const mapDispatchToProps = dispatch => {
  return {
    addWords: words => dispatch({type: 'ADD_WORDS', payload: words})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
