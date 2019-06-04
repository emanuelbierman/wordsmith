import React, { Component } from 'react';
import WordsInputContainer from '../containers/WordsInputContainer';
import Directions from './Directions';
import WordsContainer from '../containers/WordsContainer';
import { Container } from 'reactstrap';

class Home extends Component {
  render() {
    return(
      <Container className="text-info">
        <WordsInputContainer/>
        <Directions/>
        <WordsContainer/>
      </Container>
    )
  }
}

export default Home;
