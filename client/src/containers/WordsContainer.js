import React, { Component } from 'react';
import { connect } from 'react-redux';
import WordContainer from './WordContainer';
import { Row, Col, Card } from 'reactstrap';

class WordsContainer extends Component {

  render() {
    let wordsContainer;
    if (this.props.words.length > 0) {
      wordsContainer = this.props.words.map((word, index) => {
        return <Col key={index} xs="auto">
          <WordContainer word={word} key={word.id} loading={this.props.loading}/>
        </Col>
      });
    } else {
      wordsContainer = <>
        <Card body outline color="info">
          <br></br>
          <br></br>
          <h4>Follow the instructions above to begin forging!</h4>
          <br></br>
          <br></br>
        </Card>
      </>;
    }
    return(
        <Row xs="auto">
          {wordsContainer}
        </Row>
    )
  };
};

const mapStateToProps = state => ({ words: state.words, loading: state.loading })

export default connect(mapStateToProps)(WordsContainer);
