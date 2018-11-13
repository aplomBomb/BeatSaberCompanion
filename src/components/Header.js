import React from "react";
import { NavLink } from "react-router-dom";
import SearchForm from "./SearchForm";

export default function Header() {
  return (
    <div
      className="pos-f-t fixed-top"
      style={{
        boxShadow: "0em 0em .75em purple"
      }}
    >
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-dark p-4">
          <h5
            className="text-white h6 nav-item container"
            style={{
              fontSize: "2em"
            }}
          >
            <NavLink exact to="/" className="nav-link active">
              Home
            </NavLink>
            <a //returned data from this api call will be returned as props in the TwitchStreamData component//
              href="https://id.twitch.tv/oauth2/authorize?client_id=zvk3ma5y06cj6l7yud71ratb0olwt2&redirect_uri=http://localhost:3000/twitch-auth&response_type=token&scope=viewing_activity_read&state=analytics:read:games"
              className="nav-link active"
            >
              Streams
            </a>
            <NavLink exact to="/News" className="nav-link active">
              News
            </NavLink>
          </h5>
        </div>
      </div>
      <nav className="navbar navbar-dark bg-dark rounded-bottom container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <SearchForm />
      </nav>
    </div>
  );
}
// debugger;
