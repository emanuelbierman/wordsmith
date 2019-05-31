import React, { Component } from 'react';
import { connect } from 'react-redux';
import WordContainer from './WordContainer';
import { Container, Row, Col, Card, Badge } from 'reactstrap';

class WordsContainer extends Component {

  render() {
    let wordsContainer;
    if (this.props.words.length > 0) {
      wordsContainer = this.props.words.map((word, index) => <Col key={index} xs="auto"><WordContainer word={word} key={word.id} replaceWord={this.props.replaceWord} expandWord={this.props.expandWord} loading={this.props.loading}/></Col>)
    } else {
      wordsContainer = <>
        <Card body outline color="info">
          <br></br>
          <br></br>
          <h4>Welcome to the forge. Type in the text bar to fill this space with words!</h4>
          <br></br>
          <br></br>
        </Card>
      </>;
    }
    return(
      <Container className="text-info">
        <br></br>
        <Row>
          <h5><Badge color="info">1</Badge> forge your words => <Badge color="info">2</Badge> expand and collapse to explore =></h5>
        </Row>
        <Row>
          <h5><Badge color="info">3</Badge> choose the usage:sense pair that fits your meaning => <Badge color="info">4</Badge> click on synonyms to swap and experiment!</h5>
        </Row>
        <br></br>
        <Row xs="auto">
          {wordsContainer}
        </Row>
      </Container>
    )
  };
};

const mapStateToProps = state => ({ words: state.words, loading: state.loading })

const mapDispatchToProps = dispatch => {
  return {
    replaceWord: (id, newText) => dispatch({type: 'REPLACE_WORD', payload: {id: id, newText: newText }}),
    expandWord: id => dispatch({type: 'EXPAND_WORD', payload: {id: id}})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WordsContainer);
