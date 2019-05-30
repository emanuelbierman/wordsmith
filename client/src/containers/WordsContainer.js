import React, { Component } from 'react';
import { connect } from 'react-redux';
import WordContainer from './WordContainer';
import { Container, Row, Col } from 'reactstrap';

class WordsContainer extends Component {

  render() {
    return(
      <Container className="text-info">
        <br></br>
        <p>choose a word to expand it => choose the usage:sense pair that fits your meaning => begin forging!</p>
        <br></br>
        <Row xs="auto">
          {this.props.words.map((word, index) => <Col key={index} xs="auto"><WordContainer word={word} key={word.id} replaceWord={this.props.replaceWord} expandWord={this.props.expandWord} loading={this.props.loading}/></Col>)}
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
