import React from "react"
import Body from "../components/Body"
import Me from "../components/Me"

export default function About() {
  return (
    <div>
      <Body 
        bgImg={"https://i.imgur.com/2HRNmAX.png"}
        galaxyImg={"https://i.imgur.com/0MKfCWi.png"}
        lineColor={"#c7dca2"}
        hamburger={"light"}
        pageContents={<Me />}
      />
    </div>
  )
}
