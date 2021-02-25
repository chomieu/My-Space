import React from "react"
import Body from "../components/Body"
import Title from "../components/Title"

export default function Landing() {
  return (
    <div>
      <Body 
        bgImg={"https://i.imgur.com/5QXXAkE.jpg"}
        galaxyImg={"https://i.imgur.com/z5oQO2Q.png"}
        lineColor={"#ffffaf"}
        shadowColor={"#ff7402"}
        hamburger={"dark"}
        pageContents={<Title />}
      />
    </div>
  )
}
