import React from "react"
import { Container, Row, Col } from "react-bootstrap"

export default function Contents(props) {
  return (
    <Container fluid className="wrapper">
      <Row className="h-100">
        <Col className="contents" xs={12} lg={6}>
          {props.pageContents}
        </Col>
        <Col className="d-flex flex-row-reverse flex-sm-column justify-content-between justify-content-sm-start align-items-start align-items-sm-end p-0" xs={12, { order: "first" }} lg={6, { order: "last" }}>
          <img id="galaxyImg" alt="galaxyImg" src={props.galaxyImg} />
        </Col>
      </Row>
    </Container>
  )
}
