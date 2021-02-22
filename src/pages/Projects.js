import React from "react"
import Body from "../components/Body"
import Slideshow from "../components/Slideshow"

export default function Projects() {
  return (
    <div>
      <Body 
        bgImg={"https://i.imgur.com/aBlxmBs.png"}
        galaxyImg={"https://i.imgur.com/8K4ur4P.png"}
        lineColor={"#bbb"}
        hamburger={"dark"}
        pageContents={<Slideshow />}
      />
    </div>
  )
}
