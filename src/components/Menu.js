import React from "react"
import { NavLink } from "react-router-dom"

export default function Menu() {
  return (
    <ul id="galaxyMenu">
      <li>
        <NavLink exact activeClassName="currentIcon text-border" to="/">
          <img src="https://i.imgur.com/iLfVAZb.png?1" id="sunIcon" alt="sunIcon" />
          <span>Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="currentIcon text-border" to="/About">
          <img src="https://i.imgur.com/3HopI23.png?2" id="earthIcon" alt="earthIcon" />
          <span>About</span>
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="currentIcon text-border" to="/Projects">
          <img src="https://i.imgur.com/QvtmtG5.png?1" id="moonIcon" alt="moonIcon" />
          <span>Projects</span>
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="currentIcon text-border" to="/Contact">
          <img src="https://i.imgur.com/o9MmXkK.png?1" id="neptuneIcon" alt="neptuneIcon" />
          <span>Contact</span>
        </NavLink>
      </li>
    </ul>
  )
}
