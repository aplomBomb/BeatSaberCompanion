import React, { Component } from "react";

class TwitchStreamLayout extends Component {
  render() {
    const { channel } = this.props;
    const twitchURL = "http://twitch.tv/";
    console.log(channel);
    console.log(twitchURL);
    return (
      <a
        href={twitchURL + channel.user_name}
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className="container">
          <div
            className="card mb-3"
            style={{
              marginTop: "10%",
              boxShadow: "0em 0em 1.25em purple",
              backgroundImage: "linear-gradient(to right, white, #9ca2ad)"
            }}
          >
            <img
              className="card-img-top"
              src={channel.thumbnail_url.replace(
                /{width}x{height}/,
                "1280x720"
              )}
              alt="Cover"
            />
            <div className="card-body">
              <div>
                <h4
                  className="card-title text-nowrap text-truncate"
                  style={{
                    margin: "0",
                    paddingBottom: "2%"
                  }}
                >
                  <strong>{channel.user_name}</strong>
                </h4>
                <p
                  className="text-muted text-nowrap text-truncate"
                  style={{ marginBottom: "0" }}
                >
                  {channel.title}
                </p>
              </div>

              <hr
                style={{
                  borderColor: "black",
                  margin: "0",
                  padding: "0"
                }}
              />
              <div>
                <p
                  className="card-text"
                  style={{
                    display: "inline"
                  }}
                >
                  <i
                    className="fas fa-users"
                    style={{
                      color: "red",
                      marginRight: "4px"
                    }}
                  />
                  <strong>{channel.viewer_count}</strong>
                </p>
                <p
                  className="card-text"
                  style={{
                    display: "inline"
                  }}
                />
                <div
                  style={{
                    display: "inline"
                  }}
                >
                  <ul
                    style={{
                      display: "inline",
                      float: "right"
                    }}
                  >
                    <li
                      style={{
                        listStyleType: "none"
                      }}
                    >
                      {/* <strong>ID: {}</strong> */}
                    </li>
                  </ul>
                </div>
              </div>

              <p className="card-text">
                {/* <small className="text-muted">{}</small> */}
              </p>
            </div>
          </div>
        </div>
      </a>
    );
  }
}
export default TwitchStreamLayout;
