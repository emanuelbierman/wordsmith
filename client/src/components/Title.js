import React, { Component } from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

class Title extends Component {
  render() {
    return(
      <Container className="text-info">
        <Row>
          <Col xs="6">
            <h1>Wordsmith</h1>
          </Col>
          <Col xs="3">
            <Nav>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/example">Example</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/tools">Tools</NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Title;
