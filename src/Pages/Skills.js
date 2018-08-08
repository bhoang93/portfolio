import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import {Animated} from "react-animated-css";
import './Skills.css'

import 'react-tippy/dist/tippy.css'
import {
  Tooltip,
} from 'react-tippy';

//React Images
import redux from '../Images/Logos/redux.png';
import router from '../Images/Logos/router.png';
import gatsby from '../Images/Logos/gatsby.png';

//Front-End Images
import html5 from '../Images/Logos/html5.png';
import css3 from '../Images/Logos/css3.png';
import bootstrap from '../Images/Logos/bootstrap.png';
//JS Images
import javascript from '../Images/Logos/javascript.png';
import es6 from '../Images/Logos/es6.png'
import nodejs from '../Images/Logos/nodejs.png';
import reactLogo from '../Images/Logos/react.png';
import jest from '../Images/Logos/jest.png';
import typescript from '../Images/Logos/typescript.png';
//Back-End Images
import express from '../Images/Logos/express.png';
import postgresql from '../Images/Logos/postgresql.png';
import redis from '../Images/Logos/redis.png';
//Other Images
import github from '../Images/Logos/github.png';
import heroku from '../Images/Logos/heroku.png';
import docker from '../Images/Logos/docker.png';
import aws from '../Images/Logos/aws.png';
import photoshop from '../Images/Logos/photoshop.png';
import premiere from '../Images/Logos/premiere.png';
import circleci from '../Images/Logos/circleci.png';

const Skills = () => {
	return(
		<Animated animationIn="zoomInDown" animationOut="fadeOut" isVisible={true}>
 		<ListGroup className="skills">

 		<ListGroupItem className="skillRow">
	        	<h5>React</h5>
	        		<div className="skillLogos">
	        		<Tooltip
						  title="Redux"
						  position="top"
						  trigger="mouseenter focus"
						>
	        			<img className="logos" src={redux} />
	        			</Tooltip>
	        		<Tooltip
						  title="React Router"
						  position="top"
						  trigger="mouseenter focus"
						>	        		
	        			<img className="logos" src={router} />
	        		</Tooltip>
	        		<Tooltip
						  title="Gatsby"
						  position="top"
						  trigger="mouseenter focus"
						>
	        			<img className="logos" src={gatsby} />
	        		</Tooltip>
	        		</div>
	        </ListGroupItem>

	        <ListGroupItem className="skillRow">
	        	<h5>Front-End</h5>
	        		<div className="skillLogos">
	        		<Tooltip
						  title="HTML5"
						  position="top"
						  trigger="mouseenter focus"
						>
	        			<img className="logos" src={html5} />
	        			</Tooltip>
	        		<Tooltip
						  title="CSS3"
						  position="top"
						  trigger="mouseenter focus"
						>	        		
	        			<img className="logos" src={css3} />
	        		</Tooltip>
	        		<Tooltip
						  title="Bootstrap"
						  position="top"
						  trigger="mouseenter focus"
						>
	        			<img className="logos" src={bootstrap} />
	        		</Tooltip>
	        		</div>
	        </ListGroupItem>

	        <ListGroupItem className="skillRow">
	        	<h5>JavaScript</h5>
	        		<div className="skillLogos">
	        			<Tooltip
						  title="JavaScript"
						  position="top"
						  trigger="mouseenter focus"
						>
	        			<img className="logos" src={javascript} />
	        			</Tooltip>
						<Tooltip
						  title="NodeJS"
						  position="top"
						  trigger="mouseenter focus"
						>
						<img className="logos" src={nodejs} />
						</Tooltip>

						<Tooltip
						  title="Jest"
						  position="top"
						  trigger="mouseenter focus"
						>
	        			<img className="logos" src={jest} />
	        			</Tooltip>

						<Tooltip
						  title="TypeScript"
						  position="top"
						  trigger="mouseenter focus"
						>
	        			<img className="logos" src={typescript} />
	        			</Tooltip>

	        		</div>
	        </ListGroupItem>

	        <ListGroupItem className="skillRow">
	        	<h5>Back-End</h5>
	        		<div className="skillLogos">
	        		<Tooltip
						  title="ExpressJS"
						  position="top"
						  trigger="mouseenter focus"
						>
	        			<img className="logos" src={express} />
	        		</Tooltip>
	        		<Tooltip
						  title="Postgresql"
						  position="top"
						  trigger="mouseenter focus"
						>
	        			<img className="logos" src={postgresql} />
	        		</Tooltip>
	        		<Tooltip
						  title="Redis"
						  position="top"
						  trigger="mouseenter focus"
						>
	        			<img className="logos" src={redis} />
	        		</Tooltip>
	        		</div>
	        </ListGroupItem>

	        <ListGroupItem className="skillRow">
	        	<h5>Other</h5>
	        		<div className="skillLogos">
	        	<Tooltip
						  title="Github"
						  position="top"
						  trigger="mouseenter focus"
						>
	        			<img className="logos" src={github} />
	        	</Tooltip>
	        	<Tooltip
						  title="Heroku"
						  position="top"
						  trigger="mouseenter focus"
						>
	        			<img className="logos" src={heroku} />
	        	</Tooltip>

	        	<Tooltip
						  title="Docker"
						  position="top"
						  trigger="mouseenter focus"
						>
	        			<img className="logos" src={docker} />
	        	</Tooltip>

	        	<Tooltip
						  title="Amazon Web Services"
						  position="top"
						  trigger="mouseenter focus"
						>
	        			<img className="logos" src={aws} />
	        	</Tooltip>

	      	    <Tooltip
						  title="CircleCI"
						  position="top"
						  trigger="mouseenter focus"
						>
	        			<img className="logos" src={circleci} />
	        	</Tooltip>

	        	<Tooltip
						  title="Photoshop"
						  position="top"
						  trigger="mouseenter focus"
						>
	        			<img className="logos" src={photoshop} />
	        	</Tooltip>

	        	<Tooltip
						  title="Premiere"
						  position="top"
						  trigger="mouseenter focus"
						>
	        			<img className="logos" src={premiere} />
	        	</Tooltip>

	        		</div>
	        </ListGroupItem>
      </ListGroup>
		</Animated>
		)
}

export default Skills;