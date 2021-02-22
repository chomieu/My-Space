import React from "react"
import Font from "react-font"
import Typewriter from "typewriter-effect";

export default function Title() {
  return (
    <section className="typewriter-border">
      <Font family="Pragati Narrow">
        <h1 id="title">Chomkan<br />Usaneerungrueng</h1>
      </Font>
      <Font family="Concert One">
        <Typewriter
          options={{
            strings: ['Full-stack Developer', 'Frontend Engineer'],
            autoStart: true,
            loop: true,
          }}
        />
      </Font>
    </section>
  )
}
