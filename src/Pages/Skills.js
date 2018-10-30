import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Animated } from "react-animated-css";
import "./Skills.css";

import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";

//React Images
import redux from "../Images/Logos/redux.png";
import router from "../Images/Logos/router.png";
import gatsby from "../Images/Logos/gatsby.png";
//Front-End Images
import html5 from "../Images/Logos/html5.png";
import css3 from "../Images/Logos/css3.png";
import bootstrap from "../Images/Logos/bootstrap.png";
import sass from "../Images/Logos/sass.png";
//JS Images
import javascript from "../Images/Logos/javascript.png";
import es6 from "../Images/Logos/es6.png";
import jquery from "../Images/Logos/jquery.png";
import nodejs from "../Images/Logos/nodejs.png";
import reactLogo from "../Images/Logos/react.png";
import jest from "../Images/Logos/jest.png";
import typescript from "../Images/Logos/typescript.png";
//Back-End Images
import php from "../Images/Logos/php.png";
import express from "../Images/Logos/express.png";
import postgresql from "../Images/Logos/postgresql.png";
import redis from "../Images/Logos/redis.png";
import graphql from "../Images/Logos/graphql.png";
//Other Images
import github from "../Images/Logos/github.png";
import heroku from "../Images/Logos/heroku.png";
import docker from "../Images/Logos/docker.png";
import aws from "../Images/Logos/aws.png";
import photoshop from "../Images/Logos/photoshop.png";
import premiere from "../Images/Logos/premiere.png";
import circleci from "../Images/Logos/circleci.png";

class Skill {
  constructor(name, img) {
    this.name = name;
    this.img = img;
  }
}

const reduxL = new Skill("Redux", redux);
const routerL = new Skill("React Router", router);
const gatsbyL = new Skill("Gatsby", gatsby);

const html5L = new Skill("HTML5", html5);
const css3L = new Skill("CSS3", css3);
const bootstrapL = new Skill("Bootstrap", bootstrap);
const sassL = new Skill("Sass", sass);

const javascriptL = new Skill("Javscript", javascript);
const es6L = new Skill("ES6", es6);
const jqueryL = new Skill("jQuery", jquery);
const nodeJsL = new Skill("Node JS", nodejs);
const reactL = new Skill("React", reactLogo);
const jestL = new Skill("Jest", jest);
const typescriptL = new Skill("TypeScript", typescript);

const phpL = new Skill("PHP", php);
const expressL = new Skill("Express", express);
const postgresqlL = new Skill("PostgreSQL", postgresql);
const redisL = new Skill("Redis", redis);
const graphqlL = new Skill("GraphQL", graphql);

const githubL = new Skill("Github", github);
const herokuL = new Skill("Heroku", heroku);
const dockerL = new Skill("Docker", docker);
const awsL = new Skill("AWS", aws);
const photoshopL = new Skill("Photoshop", photoshop);
const premiereL = new Skill("Premiere", premiere);
const circleciL = new Skill("Circle CI", circleci);

const reactList = [reduxL, routerL, gatsbyL];
const frontEndList = [html5L, css3L, bootstrapL, sassL];
const jsList = [
  javascriptL,
  es6L,
  jqueryL,
  nodeJsL,
  reactL,
  jestL,
  typescriptL
];
const backEndList = [phpL, expressL, redisL, graphqlL];
const otherList = [githubL, herokuL, dockerL, awsL, photoshopL, circleciL];

const displaySkillLogos = list => {
  return list.map(skill => {
    return (
      <Tooltip title={skill.name} position="top" trigger="mouseenter focus">
        <img className="logos" src={skill.img} />
      </Tooltip>
    );
  });
};

const Skills = () => {
  return (
    <Animated animationIn="zoomInDown" animationOut="fadeOut" isVisible={true}>
      <ListGroup className="skills">
        <ListGroupItem className="skillRow">
          <h5>React</h5>
          <div className="skillLogos">{displaySkillLogos(reactList)}</div>
        </ListGroupItem>

        <ListGroupItem className="skillRow">
          <h5>Front-End</h5>
          <div className="skillLogos">{displaySkillLogos(frontEndList)}</div>
        </ListGroupItem>

        <ListGroupItem className="skillRow">
          <h5>JavaScript</h5>
          <div className="skillLogos">{displaySkillLogos(jsList)}</div>
        </ListGroupItem>

        <ListGroupItem className="skillRow">
          <h5>Back-End</h5>
          <div className="skillLogos">{displaySkillLogos(backEndList)}</div>
        </ListGroupItem>

        <ListGroupItem className="skillRow">
          <h5>Other</h5>
          <div className="skillLogos">{displaySkillLogos(otherList)}</div>
        </ListGroupItem>
      </ListGroup>
    </Animated>
  );
};

export default Skills;
