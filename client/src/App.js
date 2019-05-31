import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import WordsContainer from './containers/WordsContainer';
// import PinnedSentencesContainer from './containers/PinnedSentencesContainer';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Home} />
      </Router>
    );
  }
}

export default App;
