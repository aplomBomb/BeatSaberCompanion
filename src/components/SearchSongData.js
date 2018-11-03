import React, { Component } from "react";

import SearchSongLayout from "./SearchSongLayout";
import { Consumer } from "../context";

export default class SearchSongData extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <React.Fragment>
              {/* {console.log(value.searchData)} */}
              {value.searchData.map(song => (
                <SearchSongLayout key={song.id} song={song} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
