import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <React.Fragment>
      <footer className="page-footer font-small bg-dark fixed-bottom container rounded-top">
        <div className="footer-copyright py-3">
          <NavLink exact to="/" className="nav-link active d-inline">
            <strong>Back</strong>
          </NavLink>
        </div>
      </footer>
    </React.Fragment>
  );
}
