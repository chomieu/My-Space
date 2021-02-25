import React from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Landing from "./pages/Landing"
import Projects from "./pages/Projects";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/React-Portfolio"]}>
          <Landing />
        </Route>
        <Route exact path={["/React-Portfolio/About"]}>
          <About />
        </Route>
        <Route exact path={["/React-Portfolio/Projects"]}>
          <Projects />
        </Route>
        <Route exact path={["/React-Portfolio/Contact"]}>
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
