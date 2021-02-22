import React from "react"
import Font from "react-font"

export default function Me() {
  const oldURL = "https://chomieu.github.io/Responsive-Portfolio/index.html"
  return (
    <section>
      <button onClick={ () => window.location.href=oldURL } className="text-border" id="myImg">
        <Font family="Concert One">Show</Font>
      </button>
    </section>
  )
}
