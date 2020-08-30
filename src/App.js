import React from "react";
import "./App.css";
import TopBar from "./TopBar";
import { Router, Route, Link,Redirect, Switch } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";
import HomePage from "./HomePage";
import MemesTemp from "./MemesTemp";
import history from './history';
import About from './About';
function App() {
  return (
    <div className="App">
      <Router history={history}>
        <TopBar />
        <Switch>
         <Route
          path="/"
          exact>
          <Redirect to="/home" />
        </Route>
       
        <Route
          path="/home"
          exact
          component={HomePage}
        />
          <Route
          path="/temp"
          exact
          component={MemesTemp}
        />
      
         <Route
          path="/openTemp/:url"
          exact
          children={<HomePage/>}
        />
         <Route
          path="/about"
          exact
          component={About}
        />
        </Switch>
      </Router>
      
    </div>
  );
}
export default App;