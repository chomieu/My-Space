import React from "react"
import Font from "react-font"
import { Button, Badge } from "react-bootstrap"

export default function Me() {
  return (
    <section>
      <Button
        id="myImg"
        href="/React-Portfolio/#/Bio"
        className="text-border d-flex flex-column justify-content-center align-items-center" >
        <Font family="Concert One">I design & build apps.</Font><Badge id="more">Click to learn more</Badge>
      </Button>
    </section>
  )
}
