import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import WordsContainer from './containers/WordsContainer';
// import PinnedSentencesContainer from './containers/PinnedSentencesContainer';
import SearchBar from './components/SearchBar';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={SearchBar} />
        <Route path="/forge/" component={WordsContainer} />
      </Router>
    );
  }
}

export default App;
