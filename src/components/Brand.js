import React from "react"
import Font from "react-font"
import Menu from "./Menu"
import { Navbar, Nav } from "react-bootstrap"

export default function Brand(props) {
  return (
    <Navbar className="px-4 pt-2 pt-md-2 pt-lg-4 pb-0" expand="lg" variant={props.hamburger}>
      <Font family="Concert One">
        <Nav.Link href="/" className="text-white text-border pb-0 pl-0 pl-md-2 pl-lg-3 mr-1">
          <h3>Chomie</h3>
        </Nav.Link>
        <Menu hideMenu={props.hideMenu} hideUpIcon={props.hideUpIcon} hideDownIcon={props.hideDownIcon} scrollText={props.scrollText} />
      </Font>
    </Navbar>
  )
}
