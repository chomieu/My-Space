import React from "react"
import Font from 'react-font'
import Navbar from "react-bootstrap/Navbar"
import { Nav, NavDropdown } from "react-bootstrap"
import "./Header.css"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faBars } from "@fortawesome/free-solid-svg-icons"

export default function Header() {
  return (
    <Navbar className="p-4" expand="lg">
      <Font family="Concert One">
        <h3 href="#home" className="text-white text-border">Chomie</h3>
      </Font>
      <Navbar.Toggle style={{border: "none"}} aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Nav.Link className="tabs" href="#home">About</Nav.Link>
          <Nav.Link className="tabs" href="#link">Projects</Nav.Link>
          <Nav.Link className="tabs" href="#link">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
