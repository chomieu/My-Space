import React from "react";
import Header from "../components/Header"
import Font from "react-font"
import Particles from "react-tsparticles";
import tsparticles from "../utils/tsparticles.json"
import { Container, Row, Col, Button } from "react-bootstrap"

export default function Bio() {
  return (
    <div id="fake-bg">
      <Header hamburger={"dark"} tabs={"tabsOpposite"} />
      <Container fluid className="wrapper">
        <Row className="h-100">
          <Col className="contents" xs={12} lg={6}>
            <section id="myImg2" ></section>
          </Col>
          <Col xs={12, { order: "first" }} lg={4, { order: "last" }}>
            <div className="text-white p-3 px-sm-3 px-lg-5 ml-lg-5" id="bio">
              <Font family="Concert One">
                <p className="pl-lg-5 pr-lg-2 pr-1 ml-lg-5">
                  Hi, I'm Chomie. Nice to meet you.
                  I am a recent graduate of the University of Washington
                  Coding Bootcamp with 3 years of experience in biomedical research.
                </p>
                <p className="pl-lg-5 pr-lg-2 pr-1 ml-lg-5">
                  As a lifelong learner and a goal-oriented individual,
                  nothing excites me more than computer programming.
                  I enjoy all aspects of coding, especially in bringing new designs,
                  ideas, and innovative solutions to life.
                </p>
                <p className="pl-lg-5 pr-lg-2 pr-1 ml-lg-5 mb-0">
                  I am currently available to take on a project or a collaboration. <Button href="/#/Contact" variant="light" size="sm">Let's talk!</Button>
                </p>
              </Font>
            </div>
          </Col>
        </Row>
      </Container>
      <Particles id="tsparticles" options={tsparticles} />
    </div>
  )
}
