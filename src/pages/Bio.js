import React from "react";
import Font from "react-font"
import Brand from "../components/Brand"
import Particles from "react-tsparticles";
import tsparticles from "../utils/tsparticles.json"
import { Container, Row, Col, Button } from "react-bootstrap"

export default function Bio() {
  return (
    <div id="fake-bg">
      <Brand hideMenu={{ display: "none" }} />
      <Button href="/#/About" id="backBtn">
        <Font family="Concert One">Back</Font>
      </Button>
      <Container fluid className="wrapper">
        <Row className="h-100">
          <Col className="contents" xs={12} lg={6}>
            <section id="myImg2" ></section>
          </Col>
          <Col className="d-flex align-items-end align-items-lg-start mt-5" xs={12} lg={6}>
            <div className="text-white p-3 px-sm-3 px-lg-4 ml-lg-5 mt-lg-4" id="bio">
              <Font family="Concert One">
                <p className="pl-lg-5 pr-lg-2 pr-1 ml-lg-5">
                  Hi, I'm Chomie. Nice to meet you.
                  I am a recent graduate of the University of Washington
                  Coding Bootcamp with 3 years of prior experience in biomedical research.
                </p>
                <p className="pl-lg-5 pr-lg-2 pr-1 ml-lg-5">
                  I enjoy all aspects of coding, especially in bringing new designs,
                  ideas, and innovative solutions to life. I am currently available to take on a project or a collaboration.
                </p>
                <p className="pl-lg-5 pr-lg-2 pr-1 ml-lg-5">
                  Technologies:
                  <ul>
                    <li class="tech">Languages: HTML, CSS, JavaScript, SQL, Handlebars, Python, Java</li>
                    <li class="tech">Library/Frameworks: React, jQuery, Node.js, Express.js, mySQL, Sequelize, MongoDB, Mongoose, D3</li>
                    <li class="tech">Others: Git, GitHub, RESTful API, MVC, SEO, Responsive UI, UX/UI, WebSocket, Test Suite, Project Management</li>
                  </ul>
                </p>
                <p className="pl-lg-5 pr-lg-2 pr-1 ml-lg-5 mb-0">
                   <Button href="/#/Contact" variant="light" size="sm">Let's talk!</Button>
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
