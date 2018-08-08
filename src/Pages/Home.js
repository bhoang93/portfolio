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
    <br />
    <Animated animationIn="lightSpeedIn" animationOut="fadeOut" animationInDelay="100" isVisible={true}>
      <div>
      	<img className="icons" src={lightning} />
      	<h3>Lightning fast performance.</h3>
      </div><br />
    </Animated>

    <Animated animationIn="lightSpeedIn" animationOut="fadeOut" animationInDelay="400" isVisible={true}>
      <div>
        <img className="icons" src={responsive} />
      	<h3>Great user experience.</h3>
      </div><br />
    </Animated>

    <Animated animationIn="lightSpeedIn" animationOut="fadeOut" animationInDelay="700" isVisible={true}>
      <div>
      	<img className="icons" src={padlock} />
      	<h3>Security for users and developers.</h3>
      </div>
    </Animated>
    </div>
    );
  }
}

export default Home;