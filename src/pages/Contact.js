import React from "react"
import Body from "../components/Body"
import Links from "../components/Links"

export default function Contact() {
  return (
    <div>
      <Body
        bgImg={"https://i.imgur.com/uMDlw8y.jpg"}
        galaxyImg={"https://i.imgur.com/mQ2o3oa.png"}
        lineColor={"#9690df"}
        shadowColor={"#000000"}
        pageContents={<Links />}
        hideDownIcon={{ display: "none" }}
        scrollText={"scrollText"}
      />
    </div>
  )
}
