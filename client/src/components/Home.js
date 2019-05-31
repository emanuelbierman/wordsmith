import React, { Component } from 'react';
import Title from './Title';
import SearchBar from './SearchBar';
import Directions from './Directions';
import WordsContainer from '../containers/WordsContainer';
import { Container } from 'reactstrap';

class Home extends Component {
  render() {
    return(
      <Container className="text-info">
        <Title/>
        <SearchBar/>
        <Directions/>
        <WordsContainer/>
      </Container>
    )
  }
}

export default Home;
