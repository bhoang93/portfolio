import React, { Component } from 'react';
import {Animated} from "react-animated-css";
import { Collapse, Button } from 'reactstrap';
import './Home.css'

import lightning from '../Images/Home/lightning.png';
import responsive from '../Images/Home/responsive.png';
import ux from '../Images/Home/ux.png';
import padlock from '../Images/Home/padlock.png';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    	how1: false, 
    	how2: false,
    	how3: false, 
    	how4: false, 
    };
  }

  render() {
    return (
    <div>
    <h2>I'll provide...</h2><br />
    <Animated animationIn="lightSpeedIn" animationOut="fadeOut" animationInDelay="100" isVisible={true}>
      <div>
      	<img className="icons" src={lightning} />
      	<h3>Lightning fast performance.</h3>
        <Button color="success" onClick={() => {this.setState({how1: !this.state.how1})}} style={{ marginBottom: '1rem' }}>How?</Button>
        <Collapse isOpen={this.state.how1}>
        	<p className="how">I’ll take the necessary steps to ensure all files are optimised for the web, by minifying and compressing static files using tools such as Webpack. I’ll structure code to have the least amount of render blocking, minimise the number of requests made to servers and utilise code splitting if necessary. This will speed up the first meaningful paint and interactivity so that users can see and interact with the website as soon as possible. </p>
        </Collapse>
      </div><br />
    </Animated>

    <Animated animationIn="lightSpeedIn" animationOut="fadeOut" animationInDelay="400" isVisible={true}>
      <div>
        <img className="icons" src={responsive} />
      	<h3>Great user experience.</h3>
        <Button color="success" onClick={() => {this.setState({how2: !this.state.how2})}} style={{ marginBottom: '1rem' }}>How?</Button>
        <Collapse isOpen={this.state.how2}>
        	<p className="how">By setting viewports, applying CSS properties and media queries I’ll make it so the user experience is great on any platform, whether it be desktops, mobile or tablets and compiling my JavaScript with Babel will also ensure parity amongst web browsers. My design choices will always be made with the goal to make my websites and apps intuitive, easy to use and frustration-free for everyone.</p>
        </Collapse>
      </div><br />
    </Animated>

    <Animated animationIn="lightSpeedIn" animationOut="fadeOut" animationInDelay="700" isVisible={true}>
      <div>
      	<img className="icons" src={padlock} />
      	<h3>Security for users and developers.</h3>
        <Button color="success" onClick={() => {this.setState({how3: !this.state.how3})}} style={{ marginBottom: '1rem' }}>How?</Button>
        <Collapse isOpen={this.state.how3}>
        	<p className="how">I will have HTTPS whenever possible, encrypt data using tools such as BCrypt and limit user actions with access control to lower the chance of sensitive data being compromised. I’ll write code that sanitises user input and parameterises queries to databases to help stop injection attacks and take preventative measures against XSS and CSRF attacks with good Content Security Policies. This means users can use my websites and apps with peace of mind.</p>
        </Collapse>
      </div>
    </Animated>
    </div>
    );
  }
}

export default Home;