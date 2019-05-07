import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import WordsContainer from './containers/WordsContainer';
import PinnedSentencesContainer from './containers/PinnedSentencesContainer';
import SearchBar from './components/SearchBar';

class App extends Component {
  return (
    <Router>
      <Route component={SearchBar} />
      <Route component={WordsContainer} />
      <Route component={PinnedSentencesContainer} />
    </Router>
  );
}

export default App;
