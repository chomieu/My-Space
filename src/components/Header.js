import React from "react"
import Font from 'react-font'
import Navbar from "react-bootstrap/Navbar"
import { Nav, NavDropdown } from "react-bootstrap"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faBars } from "@fortawesome/free-solid-svg-icons"

export default function Header() {
  return (
    <Navbar className="px-4 pt-4 pb-0" expand="lg">
      <Font family="Concert One">
        <Nav.Link href="/" className="text-white text-border ml-2 mr-4"><h3>Chomie</h3></Nav.Link>
      </Font>
      <Navbar.Toggle style={{border: "none"}} aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav>
          <Nav.Link className="tabs" href="/About">About</Nav.Link>
          <Nav.Link className="tabs" href="/Projects">Projects</Nav.Link>
          <Nav.Link className="tabs" href="/Contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
