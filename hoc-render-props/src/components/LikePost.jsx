import React, { Component } from 'react';

export default class LikePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likePostCounter: 0
    };
  }
  handleLikePostCount = () => {
    this.setState((e) => {
      return { likePostCounter: e.likePostCounter + 1 };
    });
  };
  render() {
    const { likePostCounter } = this.state;
    return (
      <div>
        <button onClick={this.handleLikePostCount}>Like Image {likePostCounter}</button>
      </div>
    );
  }
}
