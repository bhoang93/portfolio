import React, { Component } from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import { Blob } from "react-blob";

import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import "./Nav.css";
import AboutImg from "../Images/About.jpg";

const linkStyle = {
  fontWeight: "bold",
  color: "#d63230"
};

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      route: "",
      navOpen: false
    };
  }

  toggleNav = () => {
    this.setState(prevState => {
      return { navOpen: !prevState.navOpen };
    });
  };

  isNavOpen = () => {
    if (this.state.navOpen) {
      return { visibility: "visible", transform: "translateY(0)" };
    }
  };

  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="navBarContainer">
          <div
            className="navOpen"
            onClick={this.toggleNav}
            style={{
              backgroundColor: !this.state.navOpen ? "#d63230" : "#39a9db"
            }}
          >
            {!this.state.navOpen ? "+" : "-"}
          </div>
          <div className="navBar" style={this.isNavOpen()}>
            <Blob
              size="80vh"
              style={{
                position: "absolute",
                top: "-10%",
                left: "-15%",
                zIndex: -1,
                backgroundColor: "white",
                color: "white",
                opacity: 0.1,
                fontSize: "50vh"
              }}
              src={AboutImg}
            />
            <div className="navTextContainer">
              <NavLink
                activeStyle={linkStyle}
                exact
                className="navText"
                to="/"
                onClick={this.toggleNav}
              >
                Home
              </NavLink>
              <NavLink
                activeStyle={linkStyle}
                exact
                className="navText"
                to="/skills"
                onClick={this.toggleNav}
              >
                Skills
              </NavLink>
              <NavLink
                activeStyle={linkStyle}
                exact
                className="navText"
                to="/portfolio"
                onClick={this.toggleNav}
              >
                Portfolio
              </NavLink>
              <NavLink
                activeStyle={linkStyle}
                exact
                className="navText"
                to="/about"
                onClick={this.toggleNav}
              >
                About
              </NavLink>
              <NavLink
                activeStyle={linkStyle}
                exact
                className="navText"
                to="/contact"
                onClick={this.toggleNav}
              >
                Contact
              </NavLink>
            </div>
          </div>
          <br />

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/portfolio" component={Projects} />
          <Route path="/contact" component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Nav;
