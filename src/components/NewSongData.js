import React from "react";
import axios from "axios";
import NewSongLayout from "./NewSongLayout";

class NewSongData extends React.Component {
  state = {
    songData: []
  };
  async componentWillMount() {
    try {
      const songData = await axios.get(
        "https://beatsaver.com/api/songs/new/{start?"
      );
      this.setState({
        songData: songData.data.songs
      });
      console.log(songData);
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <React.Fragment>
        {this.state.songData.map(song => (
          <NewSongLayout key={song.id} song={song} />
        ))}
      </React.Fragment>
    );
  }
}
export default NewSongData;
