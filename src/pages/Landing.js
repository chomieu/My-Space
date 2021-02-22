import React from "react"
import Body from "../components/Body"
import Title from "../components/Title"

export default function Landing() {
  return (
    <div>
      <Body 
        bgImg={"https://i.imgur.com/3xxHIQc.png"}
        galaxyImg={"https://i.imgur.com/qFcWar6.png"}
        lineColor={"#ffffaf"}
        hamburger={"dark"}
        pageContents={<Title />}
      />
    </div>
  )
}
