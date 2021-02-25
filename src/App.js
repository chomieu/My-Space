import React from "react";
import About from "./pages/About";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Landing from "./pages/Landing"
import Projects from "./pages/Projects";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/React-Portfolio"]}>
          <Landing />
        </Route>
        <Route exact path={["/About", "/React-Portfolio/About"]}>
          <About />
        </Route>
        <Route exact path={["/AboutMe", "/React-Portfolio/AboutMe"]}>
          <AboutMe />
        </Route>
        <Route exact path={["/Projects", "/React-Portfolio/Projects"]}>
          <Projects />
        </Route>
        <Route exact path={["/Contact", "/React-Portfolio/Contact"]}>
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
