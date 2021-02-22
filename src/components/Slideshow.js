import React from "react"
import Font from "react-font"
import { Carousel } from "react-bootstrap"

export default function Header() {
  return (
    <Carousel className="d-flex align-self-center" id="slideShow">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/MJ5Rf8k.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <Font family="Concert One">
            <h5 className="text-border mb-0 mt-2">Meets</h5>
          </Font>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/lLu2vqh.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <Font family="Concert One">
            <h5 className="text-border mb-0 mt-2">Voicely</h5>
          </Font>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
