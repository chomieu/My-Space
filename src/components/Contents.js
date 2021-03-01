import React from "react"
import Font from "react-font"
import { Container, Row, Col } from "react-bootstrap"
import { NavLink } from "react-router-dom"

export default function Contents(props) {
  return (
    <Container fluid className="wrapper">
      <Row className="h-100">
        <Col className="contents" xs={12} lg={7}>
          {props.pageContents}
        </Col>
        <Col className="d-flex flex-row-reverse flex-sm-column justify-content-between justify-content-sm-start align-items-start align-items-sm-end p-0" xs={12, { order: "first" }} lg={5, { order: "last" }}>
          <img id="galaxyImg" alt="galaxyImg" src={props.galaxyImg} />
          <Font family="Concert One">
            <ul id="galaxyMenu">
              <li>
                <NavLink exact activeClassName="currentIcon text-border" to="/">
                  <img src="https://i.imgur.com/iLfVAZb.png?1" id="sunIcon" />
                  <span>Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="currentIcon text-border" to="/About">
                  <img src="https://i.imgur.com/3HopI23.png?2" id="earthIcon" />
                  <span>About</span>
                </NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="currentIcon text-border" to="/Projects">
                  <img src="https://i.imgur.com/QvtmtG5.png?1" id="moonIcon" />
                  <span>Projects</span>
                </NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="currentIcon text-border" to="/Contact">
                  <img src="https://i.imgur.com/o9MmXkK.png?1" id="neptuneIcon" />
                  <span>Contact</span>
                </NavLink>
              </li>
            </ul>
          </Font>
        </Col>
      </Row>
    </Container>
  )
}
