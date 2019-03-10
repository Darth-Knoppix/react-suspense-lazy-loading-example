import React from "react";
import { Link } from "@reach/router";

export default ({ links }) => (
  <div className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div className="navbar-brand">React Suspense</div>
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      {links.map(x => (
        <li className="nav-item" key={x}>
          <Link to={`/${x.toLowerCase()}`} className="nav-link">
            {x}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
