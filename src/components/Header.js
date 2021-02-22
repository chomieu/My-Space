import React from "react"
import Font from "react-font"
import { Navbar, Nav } from "react-bootstrap"

export default function Header(props) {
  return (
    <Navbar className="header px-4 pt-2 pt-md-2 pt-lg-4 pb-0" expand="lg" variant={props.hamburger}>
      <Font family="Concert One">
        <Nav.Link href="/" className="text-white text-border pl-0 pl-md-2 pl-lg-3 mr-1"><h3>Chomie</h3></Nav.Link>
      </Font>
      <Navbar.Toggle bg="dark" style={{border: "none"}} aria-controls="basic-navbar-nav" />
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
