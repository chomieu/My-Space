import React from "react";
import About from "./pages/About";
import Bio from "./pages/Bio";
import Contact from "./pages/Contact";
import Landing from "./pages/Landing"
import Projects from "./pages/Projects";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/"]}>
          <Landing />
        </Route>
        <Route exact path={["/About"]}>
          <About />
        </Route>
        <Route exact path={["/Bio"]}>
          <Bio />
        </Route>
        <Route exact path={["/Projects"]}>
          <Projects />
        </Route>
        <Route exact path={["/Contact"]}>
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
