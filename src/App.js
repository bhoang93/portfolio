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
            <p className="subtitle">
              <div className="subtitleText">Front End Web Developer</div>
            </p>
          </Animated>
        </div>

        <RouteBar />
        <div id="background" />
      </div>
    );
  }
}

export default App;
