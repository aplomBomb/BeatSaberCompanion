import React, { Component } from "react";
import TwitchStreamLayout from "./TwitchStreamLayout";
import axios from "axios";

class TwitchStreamData extends Component {
  state = {
    streamData: []
  };

  async componentDidMount() {
    // const accessToken = await axios.get(
    //   "https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=zvk3ma5y06cj6l7yud71ratb0olwt2&redirect_uri=https://localhost/"
    // );

    const twitchAuthData = await axios.post(process.env.REACT_APP_TWITCH_POST);
    const twitchToken = twitchAuthData.data.access_token;
    // console.log(twitchToken);
    const twitchVerification = {
      headers: { Authorization: `Bearer ${twitchToken}` }
    };
    const twitchFetchData = await axios.get(
      "https://api.twitch.tv/helix/streams?game_id=503116",
      twitchVerification
    );
    this.setState({
      streamData: twitchFetchData.data.data
    });
    console.log(this.state.streamData);
  }

  render() {
    return (
      <div
        className="container"
        style={{
          paddingTop: "20%",
          paddingBottom: "10%"
        }}
      >
        {this.state.streamData.map(channel => (
          <TwitchStreamLayout key={channel.id} channel={channel} />
        ))}
      </div>
    );
  }
}
export default TwitchStreamData;
