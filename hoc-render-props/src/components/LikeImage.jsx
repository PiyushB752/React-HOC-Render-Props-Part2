import React, { Component } from 'react';

export default class LikeImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likeImageCounter: 0
    };
  }
  handleLikeImageCount = () => {
    this.setState((e) => {
      return { likeImageCounter: e.likeImageCounter + 1 };
    });
  };
  render() {
    const { likeImageCounter } = this.state;
    return (
      <div>
        <button onClick={this.handleLikeImageCount}>Like Image {likeImageCounter}</button>
      </div>
    );
  }
}
