import React from "react";
import { Consumer } from "../context";
import PropTypes from "prop-types";

class SearchSongLayout extends React.Component {
  render() {
    const { song } = this.props;

    console.log(song);
    return (
      <Consumer>
        {value => {
          return (
            <React.Fragment>
              <div
                className="card mb-3"
                style={{
                  boxShadow: "0em 0em 1.25em purple",
                  backgroundImage: "linear-gradient(to right, white, #9ca2ad)"
                }}
              >
                <a
                  href={song.linkUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    className="card-img-top"
                    src={song.coverUrl}
                    alt="Cover"
                  />
                </a>
                <div className="card-body">
                  <div>
                    <h6
                      className="card-title text-nowrap text-truncate"
                      style={{
                        margin: "0"
                      }}
                    >
                      {song.songName}
                    </h6>
                    <p
                      className="text-muted text-nowrap text-truncate"
                      style={{
                        margin: "0"
                      }}
                    >
                      {song.songSubName}
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
                      <i className="fas fa-arrow-alt-circle-up" />
                      {song.upVotes}
                    </p>
                    <p
                      className="card-text"
                      style={{
                        display: "inline"
                      }}
                    >
                      <i className="fas fa-arrow-alt-circle-down" />
                      {song.downVotes}
                    </p>
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
                          <strong>ID: {song.key}</strong>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p className="card-text">
                    <small className="text-muted">{song.authorName}</small>
                  </p>
                </div>
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
SearchSongLayout.propTypes = {
  song: PropTypes.object.isRequired
};
export default SearchSongLayout;
