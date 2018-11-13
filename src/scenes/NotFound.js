import React, { Component } from "react";

export default class NotFound extends Component {
  //404 page for undefined routes//
  render() {
    return (
      <div
        className="container"
        style={{
          backgroundColor: "black"
        }}
      >
        <h1
          style={{
            paddingTop: "50%",
            height: "100vh",
            fontSize: "10em"
          }}
        >
          404
          <h3>How did you get here?</h3>
        </h1>
      </div>
    );
  }
}
