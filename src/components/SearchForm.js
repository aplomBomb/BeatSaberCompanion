import React, { Component } from "react";
import { Consumer } from "../context";

class SearchForm extends Component {
  state = {
    userInput: "",
    handleUserSearch: undefined
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    // console.log(this.state.userInput);
  };
  onSubmit = (value, e) => {
    e.preventDefault();
    value.handleUserSearch(this.state.userInput);
  };

  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div
              className="row"
              style={{
                marginRight: "5%"
              }}
            >
              <form
                className="form-inline my-2 my-lg-0"
                onSubmit={this.onSubmit.bind(this, value)}
              >
                <input
                  className="form-control mr-sm-2"
                  type="text"
                  name="userInput"
                  placeholder="Search BeatSaver..."
                  aria-label="Search"
                  onChange={this.onChange}
                  style={{
                    display: "inline",

                    boxShadow: "0em 0em 2em purple"
                  }}
                />
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default SearchForm;
