import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./view/Home/home";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Home}></Route>
      </Router>
    );
  }
}
