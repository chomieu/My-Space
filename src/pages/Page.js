import React, { useState, useEffect } from "react"
import About from "./About"
import Bio from "./Bio"
import Contact from "./Contact"
import Home from "./Home"
import Projects from "./Projects"
import NoPage from "./NoPage"
import Scroll from "react-scroll-wheel-handler"
import { Redirect, useParams } from "react-router-dom"

export default function Page() {

  const pages = ["Home", "About", "Projects", "Contact"]
  const components = [<Home />, <About />, <Projects />, <Contact />]
  const { slug } = useParams()
  const [index, setIndex] = useState(pages.indexOf(slug))
  const [page, setPage] = useState(components[index])
  const [param, setParam] = useState()

  useEffect(() => {
    setIndex(pages.indexOf(slug))
    setPage(components[index])
  }, [])

  const previousPage = () => {
    if (index > 0) {
      const previous = index - 1
      setIndex(previous)
      setPage(components[previous])
      setParam(<Redirect to={`/${pages[previous]}`} />)
    }
  }

  const nextPage = () => {
    if (index < 3) {
      const next = index + 1
      setIndex(next)
      setPage(components[next])
      setParam(<Redirect to={`/${pages[next]}`} />)
    }
  }

  return (
    <Scroll upHandler={() => previousPage()} downHandler={() => nextPage()}>
      {param}
      {page}
    </Scroll>
  )
}
