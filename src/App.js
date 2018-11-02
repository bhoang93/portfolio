import React, { Component } from "react";
import "./App.css";
import RouteBar from "./Pages/Nav";
import { Animated } from "react-animated-css";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <div id="Header">
          <h1>Brian Hoang</h1>
          <Animated animationIn="bounceInDown" isVisible={true}>
            <h3 className="subtitle">Front End Web Developer</h3>
          </Animated>
        </div>

        <RouteBar />
        <div id="background" />
      </div>
    );
  }
}

export default App;
