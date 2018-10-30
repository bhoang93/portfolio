import React, { Component } from "react";
import "./App.scss";
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
            <p className="subtitle">Front End Web Developer</p>
          </Animated>
        </div>

        <RouteBar />
      </div>
    );
  }
}

export default App;
