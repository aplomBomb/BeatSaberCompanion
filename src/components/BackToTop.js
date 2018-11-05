import React, { Component } from "react";

export default class BackToTop extends Component {
  goToTop() {
    window.scrollTo(0);
  }
  render() {
    return (
      <i
        className="far fa-arrow-alt-circle-up"
        onClick={this.goToTop}
        style={{
          display: "fixed",
          bottom: "5%"
        }}
      />
    );
  }
}
