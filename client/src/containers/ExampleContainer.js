import React, { Component } from 'react';
import { connect } from 'react-redux';
import Directions from '../components/Directions';
import WordsContainer from './WordsContainer';
import { Container, Input, InputGroup, InputGroupAddon, Button } from 'reactstrap';

class ExampleContainer extends Component {

  render() {
    return(
      <Container className="text-info">
        <InputGroup>
          <Input type="text" placeholder="Click the forge button to load an example sentence below:" disabled />
          <InputGroupAddon addonType="append">
            <Button color="info" onClick={this.props.addExample}>Forge</Button>
          </InputGroupAddon>
        </InputGroup>
        <Directions/>
        <WordsContainer/>
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addExample: () => dispatch({type: 'ADD_EXAMPLE'})
  }
}

export default connect(null, mapDispatchToProps)(ExampleContainer);
