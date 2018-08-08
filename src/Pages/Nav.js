import React, {Component} from 'react';
import { BrowserRouter as BrowserRouter, Route, NavLink } from "react-router-dom";
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import './Nav.css'

const linkStyle = {
	fontWeight: "bolder",
	borderBottom: "3px solid green",
}

class Nav extends Component {
	constructor() {
		super();
		this.state = {
			route: ''
		}
	}
	render() {
			return(
		  <BrowserRouter basename={process.env.PUBLIC_URL}>
			    <div>
			      <div className="navBar">
			          <NavLink activeStyle={linkStyle} exact className="navText" to="/">Home</NavLink>
			          <NavLink activeStyle={linkStyle} exact className="navText" to="/skills"> Skills</NavLink>
			          <NavLink activeStyle={linkStyle} exact className="navText" to="/portfolio"> Portfolio</NavLink>
			          <NavLink activeStyle={linkStyle} exact className="navText" to="/about"> About</NavLink>
			          <NavLink activeStyle={linkStyle} exact className="navText" to="/contact"> Contact</NavLink>
			      </div><br />

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

