import React, { Component } from "react";
import { Consumer } from "../context";
import axios from "axios";
import NewsLayout from "../components/NewsLayout";
// import Header from "../components/Header";

export default class About extends Component {
  state = {
    steamData: []
  };
  async componentDidMount() {
    const newsData = await axios.get(
      "http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=620980&maxlength=300&format=json"
    );
    this.setState({
      steamData: newsData.data.appnews.newsitems
    });
    // console.log(this.state.steamData);
  }
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <React.Fragment>
              <div
                className="container"
                style={{
                  paddingTop: "20%"
                }}
              >
                {this.state.steamData.map(article => (
                  <NewsLayout key={article.gid} article={article} />
                ))}
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
