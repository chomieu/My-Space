import React from "react"
import Font from "react-font"
import { Carousel } from "react-bootstrap"

export default function Header(props) {
  return (
    <Carousel className="d-flex align-self-center" id="slideShow">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/mteTq4g.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/mteTq4g.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h5>First slide label</h5>
          <p>Nulla</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/mteTq4g.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h5>First slide label</h5>
          <p>Nulla</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
