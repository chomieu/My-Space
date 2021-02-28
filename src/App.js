import React from "react"
import Page from "./pages/Page"
import { HashRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/:slug">
          <Page />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
