import React from "react"
import Body from "../components/Body"
import Slideshow from "../components/Slideshow"

export default function Projects() {
  return (
    <div>
      <Body 
        bgImg={"https://i.imgur.com/KLSZtA6.jpg"}
        galaxyImg={"https://i.imgur.com/t6WUaAR.png"}
        lineColor={"#bbb"}
        shadowColor={"#000000"}
        pageContents={<Slideshow />}
      />
    </div>
  )
}
