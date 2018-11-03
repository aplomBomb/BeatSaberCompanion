import React from "react";
import Axios from "axios";
// import SearchSongLayout from "./components/SearchSongLayout";

export const Context = React.createContext(undefined);

export class Provider extends React.Component {
  state = {
    searchData: [],
    userInput: "",
    userSubmit: "",
    TEST_MODE: true,
    handleUserSearch: input => {
      // console.log(input);
      this.getSongs(input);
    }
  };

  async getSongs(userSearch) {
    try {
      const response = await Axios.get(
        `https://beatsaver.com/api/songs/search/all/${userSearch}`
      );
      this.setState({
        searchData: response.data.songs
      });
      // console.log(this.state.searchData);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
