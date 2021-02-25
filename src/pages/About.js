import React from "react"
import Body from "../components/Body"
import Me from "../components/Me"

export default function About() {
  return (
    <div>
      <Body 
        bgImg={"https://i.imgur.com/XAaRPSN.jpg"}
        galaxyImg={"https://i.imgur.com/bPkDW02.png"}
        lineColor={"#c7dca2"}
        shadowColor={"#efefb1"}
        hamburger={"light"}
        pageContents={<Me />}
      />
    </div>
  )
}
