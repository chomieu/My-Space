import React from "react"
import Bio from "./pages/Bio"
import Page from "./pages/Page"
import { HashRouter as Router, Route, Switch } from "react-router-dom"

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Page id={0} />
        </Route>
        <Route exact path="/About">
          <Page id={1} />
        </Route>
        <Route exact path="/Bio">
          <Bio />
        </Route>
        <Route exact path="/Projects">
          <Page id={2} />
        </Route>
        <Route exact path="/Contact">
          <Page id={3} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
