import React from 'react';
import {Animated} from "react-animated-css";
import { Collapse } from 'reactstrap';
import './Contact.css';

import github from '../Images/Logos/github.png';
import linkedin from '../Images/Logos/linkedin.png';
import email from '../Images/Home/email.png';

const Contact = () => {
	return(
		<Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true}>
		<div className="contactInfo">
			<ul className="list">
			<a className="contactLinks" href="mailto:bhoang35@gmail.com">
				<li className="email boxes">
						<img className="contactLogos" src={email} />

						<Animated animationIn="fadeIn" animationInDelay="900" isVisible={true}>
							<h2>Email</h2>
						</Animated>
				</li>
								</a>
			<a className="contactLinks" href="https://www.linkedin.com/in/brian-hoang-519536b9/">
			<li className="linkedIn boxes">
				<img className="contactLogos" src={linkedin} />
			<Animated animationIn="fadeIn" animationInDelay="1200" isVisible={true}>
					<h2>LinkedIn</h2>
			</Animated>
			</li>
						</a>

			<a className="contactLinks" href="https://github.com/bhoang93">
			<li className="gitHub boxes">
				<img className="contactLogos" src={github} />
			<Animated animationIn="fadeIn" animationInDelay="1500" isVisible={true}>
				<h2>GitHub</h2>
			</Animated>
			</li>
			</a>
			</ul>
		</div>
		</Animated>
		)
}

export default Contact;