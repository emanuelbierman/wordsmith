import React, { Component } from 'react';
import Comment from '../components/Comment';
import { Container, Button, Input } from 'reactstrap';

class CommentContainer extends Component {

  state = {
    comment: '',
    comments: []
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = event => {
    let comment = this.state.comment;
    let comments = this.state.comments;
    this.setState({
      comments: [...comments, comment]
    }, () => {
      this.setState({
        comment: ''
      })
    });
  }

  render() {
    let comments;
    if (this.state.comments.length > 0) {
      comments = this.state.comments.map((comment, index) => {
        return <><Comment comment={comment}/><br/></>
      });
    } else {
      comments = '';
    }

    return(
      <Container>
        <Input name="comment" type="textarea" value={this.state.comment} onChange={this.handleChange}/>
        <Button onClick={this.handleSubmit}>Submit</Button>
        <hr/>
        {comments}
      </Container>
    )
  }
}

export default CommentContainer;
