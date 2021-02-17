import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs(props) {
  const location = useLocation();

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={ location.pathname === "/" ? "nav-link active" : "nav-link" }>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/discover" className={ location.pathname === "/discover" ? "nav-link active" : "nav-link" }>
          Discover
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/search" className={ location.pathname === "/search" ? "nav-link active" : "nav-link"  }>
          Search
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
