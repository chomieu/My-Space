import React from "react"
import { Container, Row, Col } from "react-bootstrap"

export default function Contents(props) {
  return (
    <Container fluid className="wrapper">
      <Row className="h-100">
        <Col className="contents" xs={{ span: 12, order: "last" }} lg={{ span: 6, order: "first" }}>
          {props.pageContents}
        </Col>
        <Col className="d-flex flex-row-reverse flex-sm-column justify-content-between justify-content-sm-start align-items-start align-items-sm-end p-0" xs={12} lg={6}>
          <img id="galaxyImg" alt="galaxyImg" src={props.galaxyImg} />
        </Col>
      </Row>
    </Container>
  )
}
