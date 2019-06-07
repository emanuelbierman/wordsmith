import React, { Component } from 'react';

class Comment extends Component {

  render() {
    let comment = this.props.comment;

    return(
      <>{comment}</>
    )
  }
}

export default Comment;
