import React from "react"
import Font from "react-font"
import { Carousel, Button } from "react-bootstrap"

export default function Slideshow() {
  return (
    <Carousel className="d-flex align-self-center p-1 pb-0" id="slideShow">
      <Carousel.Item interval={6500}>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/PV0WiqE.jpg"
          alt="Intro slide"
        />
        <div style={{ opacity: 1 }}>
          <Font family="Monda">
            <p className="mb-3 text-center">Recent Projects</p>
            <h4>This slideshow contains</h4>
            <h4>my award-winning projects.</h4>
            <h4>Hover on them for more details!</h4>
          </Font>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/eopg7CQ.png?1"
          alt="First slide"
        />
        <div>
          <Font family="Concert One">
            <h3 className="text-border">Radcats Karaoke</h3>
            <h4>Multiplayer rhythm game with</h4>
            <h4>live session and 3D elements</h4>
            <div className="d-flex pb-3 pt-sm-3">
              <Button href="https://github.com/chomieu/RadCaTS-Karaoke" variant="light" className="mr-3">Repository</Button>
              <Button href="https://radcats-karaoke.herokuapp.com" variant="light">Live Site</Button>
            </div>
          </Font>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/wHayz1A.jpg"
          alt="First slide"
        />
        <div>
          <Font family="Concert One">
            <h3 className="text-border">Meets</h3>
            <h4>Next generation social media</h4>
            <h4>app with A.I. integration.</h4>
            <div className="d-flex pb-3 pt-sm-3">
              <Button href="https://github.com/chomieu/Meets" variant="light" className="mr-3">Repository</Button>
              <Button href="https://uw-meets.herokuapp.com" variant="light">Live Site</Button>
            </div>
          </Font>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/IN70QbQ.jpg"
          alt="Second slide"
        />
        <div>
          <Font family="Concert One">
            <h3 className="text-border">Voicely</h3>
            <h4>Online notepad with Speech-to-Text</h4>
            <h4>and Speech-to-Emoji features.</h4>
            <div className="d-flex pb-3 pt-sm-3">
              <Button href="https://github.com/chomieu/Voicely" variant="light" className="mr-3">Repository</Button>
              <Button href="https://chomieu.github.io/Voicely/" variant="light">Live Site</Button>
            </div>
          </Font>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/PV0WiqE.jpg"
          alt="Intro slide"
        />
        <div style={{ opacity: 1 }}>
          <Font family="Monda">
            <h4>Checkout my Github Repo for more:</h4>
            <Button href="https://github.com/chomieu" variant="light" size="lg" className="mt-3">Here</Button>
          </Font>
        </div>
      </Carousel.Item>
    </Carousel>
  )
}
