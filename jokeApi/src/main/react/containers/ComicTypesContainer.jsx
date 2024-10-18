import React, { Component } from "react";

export class ComicTypesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      types: null,
    };
  }

  render() {
    const { types } = this.state;
    const temp = false;
    return temp === "SUCCESS" ? (
      <>
        <div></div>
      </>
    ) : temp === "FAILURE" ? (
      this.onFailure()
    ) : (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
}

export default ComicTypesContainer;
