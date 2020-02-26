import React, { Component } from "react";
import TwitchStreamLayout from "./TwitchStreamLayout";
import axios from "axios";
import Footer from "./Footer";

const queryString = require("query-string");

class TwitchStreamData extends Component {
	state = {
		streamData: []
	};

	async componentDidMount() {
		const twitchQueryParsed = queryString.parse(this.props.location.hash); //parse the current url into readable structure//
		const token = twitchQueryParsed.access_token; //store the unique auth token into variable//
		// console.log(token);

		const twitchVerification = {
			headers: { Authorization: `Bearer ${token}` } //headers setup for authentication for the next get request//
		};
		const twitchFetchData = await axios.get(
			"https://api.twitch.tv/helix/streams?game_id=503116", //actual api call for needed data//
			twitchVerification
		);
		this.setState({
			streamData: twitchFetchData.data.data //organize the received data//
		});
		// console.log(this.state.streamData);
	}

	render() {
		return (
			<>
				<div
					className="container"
					style={{
						paddingTop: "20%",
						paddingBottom: "10%"
					}}
				>
					{this.state.streamData.map((
						channel //iterate and send data to TwitchStreamLayout component//
					) => (
						<TwitchStreamLayout key={channel.id} channel={channel} />
					))}
				</div>
				<Footer />
			</>
		);
	}
}
export default TwitchStreamData;
