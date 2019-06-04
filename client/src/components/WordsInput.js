import React, { Component } from 'react';
import {
  Container,
  Button,
  Input,
  InputGroup,
  InputGroupAddon
} from 'reactstrap';

class WordsInput extends Component {

  state = {
    input: ''
  }

  handleChange = event => {
    this.setState({input: event.target.value})
  }

  submitWords = () => {
    let words = this.state.input.toLowerCase();
    this.props.addWords(words);
  }

  render() {
    return(
        <Container>
          <InputGroup>
            <Input type="text" value={this.state.input} onChange={this.handleChange} placeholder="Start typing or paste any text:" />
            <InputGroupAddon addonType="append">
              <Button color="info" onClick={this.submitWords}>Forge</Button>
            </InputGroupAddon>
          </InputGroup>
        </Container>
    );
  }
}

export default WordsInput;
