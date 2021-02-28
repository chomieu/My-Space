import React from "react"
import { Container, Row, Col } from "react-bootstrap"

export default function Contents(props) {
  return (
    <Container fluid className="wrapper">
      <Row className="h-100">
        <Col className="contents" xs={12} lg={8}>
          {props.pageContents}
        </Col>
        <Col className="d-flex flex-row-reverse flex-sm-column justify-content-between justify-content-sm-start align-items-start align-items-sm-end p-0" xs={12, { order: "first" }} lg={4, { order: "last" }}>
          <img id="galaxyImg" alt="galaxyImg" src={props.galaxyImg} />
          <ul id="galaxyMenu">
            <li><img src="https://i.imgur.com/iLfVAZb.png?1" id="sunIcon" />Home</li>
            <li><img src="https://i.imgur.com/3HopI23.png?2" id="earthIcon" />About</li>
            <li><img src="https://i.imgur.com/QvtmtG5.png?1" id="moonIcon" />Projects</li>
            <li><img src="https://i.imgur.com/o9MmXkK.png?1" id="neptuneIcon" />Contact</li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}
