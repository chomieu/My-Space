import React from "react"
import Font from "react-font"
import { Carousel, Button } from "react-bootstrap"

export default function Header() {
  return (
    <Carousel className="d-flex align-self-center p-1 pb-0" id="slideShow">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/PV0WiqE.jpg"
          alt="Intro slide"
        />
        <div style={{ opacity: 1 }}>
          <Font family="Concert One">
            <p className="mb-3 text-center">My Recent Work</p>
            <h4>This slideshow contains</h4>
            <h4>projects I've worked on recently.</h4>
            <h4>Hover on them for more details!</h4>
          </Font>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/wHayz1A.jpg"
          alt="First slide"
        />
        <div>
          <Font family="Concert One">
            <h3 className="text-border">Meets</h3>
            <h4>Next generation social planning</h4>
            <h4>app with A.I. integration.</h4>
            <div className="d-flex pb-3 pt-2 pt-sm-3">
              <Button variant="light" size="sm mr-3">Repository</Button>
              <Button variant="light" size="sm">Live Site</Button>
            </div>
          </Font>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/IN70QbQ.jpg"
          alt="Second slide"
        />
        <div>
          <Font family="Concert One">
            <h3 className="text-border">Voicely</h3>
            <h4>Notepad with Speech-to-Text technology</h4>
            <h4>and ability to parse text to an emoji.</h4>
            <div className="d-flex pb-3 pt-2 pt-sm-3">
              <Button variant="light" size="sm mr-3">Repository</Button>
              <Button variant="light" size="sm">Live Site</Button>
            </div>
          </Font>
        </div>
      </Carousel.Item>
    </Carousel>
  )
}
