import React from "react"
import Header from "./Header"
import Line from "./Line"
import Particles from "react-tsparticles";
import tsparticles from "../utils/tsparticles.json"
import { Container, Row, Col } from "react-bootstrap"
import "./Body.css"

export default function Body(props) {

  return (
    <div className="bg" style={{backgroundImage: `url(${props.bgImg})`}}>
      <Line lineColor={props.lineColor} />
      <Header hamburger={props.hamburger} themeColor={props.themeColor}/>
      <Container fluid className="wrapper">
        <Row className="h-100">
          <Col className="contents" xs={12} lg={6}>
            {props.pageContents}
          </Col>
          <Col className="d-flex justify-content-end p-0" xs={12, { order: "first" }} lg={4, { order: "last" }}>
            <img id="galaxy-img" src={props.galaxyImg} />
          </Col>
        </Row>
      </Container>
      <Particles id="tsparticles" options={tsparticles} />
    </div>
  )
}
