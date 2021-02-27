import React, { useState } from "react";
import About from "./pages/About";
import Bio from "./pages/Bio";
import Contact from "./pages/Contact";
import Landing from "./pages/Landing"
import Projects from "./pages/Projects";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Scroll from "react-scroll-wheel-handler";

function App() {

  const pages = {
    p1: <Landing />,
    p2: <About />,
    p3: <Projects />,
    p4: <Contact />
  }

  const [index, setIndex] = useState(0)
  var i = Object.keys(pages)[index]

  const [page, setPage] = useState(pages[i])

  const previousPage = () => {
    if (index > 0) {
      const previous = index - 1
      setIndex(previous)
      setPage(pages[Object.keys(pages)[previous]])
    }
  }

  const nextPage = () => {
    if (index < 3) {
      const next = index + 1
      setIndex(next)
      setPage(pages[Object.keys(pages)[next]])
    }
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Scroll
            upHandler={() => previousPage()}
            downHandler={() => nextPage()}
          >
            {page}
          </Scroll>
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
        <Route exact path="/Bio">
          <Bio />
        </Route>
        <Route exact path="/Projects">
          <Projects />
        </Route>
        <Route exact path="/Contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
