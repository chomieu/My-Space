import React from "react"
import Font from "react-font"
import { Button } from "react-bootstrap"

export default function Me() {
  return (
    <section>
      <Button
        id="myImg"
        href="/React-Portfolio/#/AboutMe"
        className="text-border d-flex justify-content-center align-items-center" >
        <Font family="Concert One">Show</Font>
      </Button>
    </section>
  )
}
