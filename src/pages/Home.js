import React from "react"
import Body from "../components/Body"
import Title from "../components/Title"

export default function Home() {
  return (
    <div>
      <Body 
        bgImg={"https://i.imgur.com/5QXXAkE.jpg"}
        galaxyImg={"https://i.imgur.com/TYzHzYI.png"}
        lineColor={"#ffffaf"}
        shadowColor={"#ff7402"}
        pageContents={<Title />}
      />
    </div>
  )
}
