import React from "react"
import Header from "./Header"
import Title from "./Title"
import Line from "./Line"
import Font from "react-font"
import Typewriter from "typewriter-effect";
import Particles from "react-tsparticles";
import tsparticles from "../utils/tsparticles.json"
import { Container, Row, Col } from "react-bootstrap"
import "./Body.css"

export default function Body(props) {

  return (
    <div className="bg" style={{backgroundImage: `url(${props.bgImg})`}}>
      <Line />
      <Header />
      <Container fluid className="content">
        <Row className="h-100">
          <Col className="text-border typewriter" xs={12} lg={6}>
            <Font family="Pragati Narrow">
              <Title text="Chomkan Usaneerungrueng" />
            </Font>
            <Font family="Concert One">
              <Typewriter
                options={{
                  strings: ['Full-stack Developer', 'Frontend Engineer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </Font>
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
