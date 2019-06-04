import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Title from './components/Title';
import Home from './components/Home';
import ExampleContainer from './containers/ExampleContainer';
import Tools from './components/Tools';

class App extends Component {
  render() {
    return (
      <Router>
        <Title/>
        <Route exact path="/" component={Home} />
        <Route path="/example" component={ExampleContainer} />
        <Route path="/tools" component={Tools} />
      </Router>
    );
  }
}

export default App;
