import React, { Component } from 'react';
import { Container, Row, Badge } from 'reactstrap';

class Directions extends Component {
  render() {
    return(
      <Container>
        <br></br>
        <Row>
          <h5><Badge color="info">1</Badge> forge your words => <Badge color="info">2</Badge> expand and collapse to explore =></h5>
        </Row>
        <Row>
          <h5><Badge color="info">3</Badge> choose the usage:sense pair that fits your meaning => <Badge color="info">4</Badge> click on synonyms to swap and experiment!</h5>
        </Row>
        <Row>
          <p>Note: very small words, plural forms and other variants may not have an entry in the Thesaurus</p>
        </Row>
      </Container>
    )
  }
}

export default Directions;
