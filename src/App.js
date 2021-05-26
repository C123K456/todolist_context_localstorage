
import "./App.css";
import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/Home";

import UserStoreProvider from "./context/UserContext";

function App() {
  return (
    <UserStoreProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserStoreProvider>
  );
}

export default App;
