import React, { Component } from 'react';

class Synonym extends Component {
  render() {
    return(
      <li onClick={() => this.props.swapText(this.props.synonym)}>
        {this.props.synonym}
      </li>
    )
  }
}

export default Synonym;
