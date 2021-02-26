import React from "react"
import Font from "react-font"
import Typewriter from "typewriter-effect";

export default function Title() {
  return (
    <section className="typewriterBorder">
      <h1 id="title">
        <span>C</span>
        <span>h</span>
        <span>o</span>
        <span>m</span>
        <span>k</span>
        <span>a</span>
        <span>n</span>
        <br />
        <span>U</span>
        <span>s</span>
        <span>a</span>
        <span>n</span>
        <span>e</span>
        <span>e</span>
        <span>r</span>
        <span>u</span>
        <span>n</span>
        <span>g</span>
        <span>r</span>
        <span>u</span>
        <span>e</span>
        <span>n</span>
        <span>g</span>
      </h1>
      <Font family="Concert One">
        <Typewriter
          options={{
            autoStart: false,
            loop: true,
            cursor: "_",
            delay: 25,
            deleteSpeed: 20
          }}
          onInit={(typewriter) => {
            setTimeout(() => {
              typewriter
                .pasteString("> ")
                .typeString("Full-stack Developer")
                .pauseFor(2500)
                .deleteChars(20)
                .typeString("Frontend Engineer")
                .pauseFor(2500)
                .deleteChars(17)
                .start()
            }, 4500)
          }}
        />
      </Font>
    </section>
  )
}
