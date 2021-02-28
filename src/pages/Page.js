import React, { useState } from "react"
import About from "./About"
import Contact from "./Contact"
import Home from "./Home"
import Projects from "./Projects"
import Scroll from "react-scroll-wheel-handler"
import { Redirect } from "react-router-dom"

export default function Page(props) {

  const hrefs = ["/", "/About", "/Projects", "/Contact"]
  const components = [<Home />, <About />, <Projects />, <Contact />]

  const [param, setParam] = useState()

  const previousPage = () => {
    if (props.id > 0) {
      const previous = props.id - 1
      setParam(<Redirect to={hrefs[previous]} />)
    }
  }

  const nextPage = () => {
    if (props.id < 3) {
      const next = props.id + 1
      setParam(<Redirect to={hrefs[next]} />)
    }
  }

  return (
    <Scroll upHandler={() => previousPage()} downHandler={() => nextPage()}>
      {components[props.id]}
      {param}
    </Scroll>
  )
}
