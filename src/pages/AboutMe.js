import React, { useState } from "react";
import Header from "../components/Header"
import Particles from "react-tsparticles";
import tsparticles from "../utils/tsparticles.json"
import { Container, Row, Col } from "react-bootstrap"

export default function AboutMe() {
  return (
    <div id="fake-bg">
      <Header hamburger={"dark"} tabs={"tabsOpposite"} />
      <Container fluid className="wrapper">
        <Row className="h-100">
          <Col className="contents" xs={12} lg={6}>
            <section id="myImg2" ></section>
          </Col>
          <Col className="d-flex justify-content-end" xs={12, { order: "first" }} lg={4, { order: "last" }}>
            <div className="text-white pl-md-0 ml-md-0 pl-lg-5 ml-lg-5" id="bio">
              <p>Hello, my name is Chomkan Usaneerungrueng. I was born in Bangkok, Thailand.</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Particles id="tsparticles" options={tsparticles} />
    </div>
  )
}
