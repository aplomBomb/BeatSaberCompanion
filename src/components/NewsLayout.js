import React, { Component } from "react";
import PropTypes from "prop-types";

class NewsLayout extends Component {
  render() {
    const { article } = this.props;
    // console.log(article);
    return (
      <div
        className="card container"
        style={{
          marginTop: "10%",
          boxShadow: "0em 0em 1.25em purple",
          backgroundImage: "linear-gradient(to right, white, #9ca2ad)"
        }}
      >
        <div className="card-body">
          <h5 className="card-title">{article.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            Author: {article.author}
          </h6>
          <p className="card-text">{article.contents}</p>
          <a
            href={article.url}
            rel="noopener noreferrer"
            target="_blank"
            className="card-link"
          >
            Go To Story
          </a>
        </div>
      </div>
    );
  }
}
NewsLayout.propTypes = {
  article: PropTypes.object.isRequired
};
export default NewsLayout;
