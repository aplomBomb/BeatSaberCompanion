import React from "react";
import NewSongData from "../components/NewSongData";
import { Consumer } from "../context";
// import SearchForm from "../components/SearchForm";
import SearchSongData from "../components/SearchSongData";
// import SearchSongLayout from "../components/SearchSongLayout";
// import Axios from "axios";

export default class Landing extends React.Component {
  // async generalSearch() {
  //   try {
  //     const searchData = await Axios.get(
  //       "https://beatsaver.com/api/songs/search/name/bomb+nissim"
  //     );
  //     this.setState({
  //       searchData: searchData.data.songs
  //     });
  //     console.log(searchData);
  //   } catch (error) {}
  // }

  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div
              className="container"
              style={{
                paddingTop: "30%"
              }}
            >
              <SearchSongData />
              <hr
                style={{
                  borderColor: "white",
                  // marginTop: "25%",
                  boxShadow: "0em 0em .2em purple"
                }}
              />

              <h1
                className="display-5 text-center text-white"
                style={{
                  textShadow: "0em 0em 3em purple"
                }}
              >
                Newest Maps
              </h1>
              <hr
                style={{
                  borderColor: "white",
                  // paddingBottom: "25%",
                  boxShadow: "0em 0em .2em purple"
                }}
              />

              <NewSongData />
            </div>
          );
        }}
      </Consumer>
    );
  }
}
