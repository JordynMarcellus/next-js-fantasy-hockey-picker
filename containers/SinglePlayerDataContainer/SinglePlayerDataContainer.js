import React, { Component } from "react";

class SinglePlayerDataContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerData: null,
    };
  }
  render() {
    return <div>{this.props.selectedPlayerId}</div>;
  }
}

export default SinglePlayerDataContainer;
