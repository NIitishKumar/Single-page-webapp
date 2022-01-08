import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./Register";
import HomePage from "./HomePage";
import DetailPage from "./DetailPage";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/" component={App} />
      <Route exact path="/detail" component={DetailPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
