import React from "react";
import Project from "../Components/Card";
import "./Projects.css";
import foodapp from "../Images/Projects/foodapp.png";
import facerecog from "../Images/Projects/facerecog.png";
import gem from "../Images/Projects/gem.png";
import dogapp from "../Images/Projects/dogapp.png";
import bluetail from "../Images/Projects/bluetail.png";
import afa from "../Images/Projects/AFA.png";
import trado from "../Images/Projects/trado.png";
import zevieLogo from "../Images/Projects/zevie.webp";
import wacLogo from "../Images/Projects/wac.svg";
import wamLogo from "../Images/Projects/Young_Marmalade.png";

//React Images
import redux from "../Images/Logos/redux.png";
import router from "../Images/Logos/router.png";
import gatsby from "../Images/Logos/gatsby.png";
import expo from "../Images/Logos/expo.png";
//Front-End Images
import html5 from "../Images/Logos/html5.png";
import css3 from "../Images/Logos/css3.png";
import bootstrap from "../Images/Logos/bootstrap.png";
import sass from "../Images/Logos/sass.png";
//JS Images
// import javascript from "../Images/Logos/javascript.png";
import es6 from "../Images/Logos/es6.png";
// import jquery from "../Images/Logos/jquery.png";
import nodejs from "../Images/Logos/nodejs.png";
import reactLogo from "../Images/Logos/react.png";
// import jest from "../Images/Logos/jest.png";
// import typescript from "../Images/Logos/typescript.png";
//Back-End Images
// import php from "../Images/Logos/php.png";
import express from "../Images/Logos/express.png";
import postgresql from "../Images/Logos/postgresql.png";
import redis from "../Images/Logos/redis.png";
import graphql from "../Images/Logos/graphql.png";
//Other Images
// import github from "../Images/Logos/github.png";
// import heroku from "../Images/Logos/heroku.png";
import docker from "../Images/Logos/docker.png";
// import aws from "../Images/Logos/aws.png";
// import photoshop from "../Images/Logos/photoshop.png";
// import premiere from "../Images/Logos/premiere.png";
// import circleci from "../Images/Logos/circleci.png";

import { Animated } from "react-animated-css";

const tradoApp = {
  title: "Trado",
  img: trado,
  text: "Quoting and shopping app for electricians made in React Native.",
  skills: [expo, reactLogo, redux, es6],
  link: "https://apps.apple.com/gb/app/trado/id1497693898",
};

const wac = {
  title: "White & Co",
  img: wacLogo,
  text: "Brochure site for Dental Practices using Drupal and Gatsby.",
  skills: [gatsby, redux, reactLogo, es6, graphql, docker],
  link: "https://www.whiteandcodental.co.uk/",
};

const zevie = {
  title: "We Are Marmalade",
  img: wamLogo,
  text: "Website for car insurance company using Drupal and Gatsby.",
  skills: [gatsby, redux, reactLogo, es6, graphql, docker],
  link: "https://www.wearemarmalade.co.uk/",
};

const projectList = [tradoApp, wac, zevie];

const Projects = () => {
  return (
    <Animated animationIn="zoomInDown" animationOut="fadeOut" isVisible={true}>
      <div id="projectGrid">
        {projectList.map((project) => {
          return (
            <Project
              cardTitle={project.title}
              cardText={project.text}
              cardImg={project.img}
              skills={project.skills}
              buttonLink={project.link}
              key={project.title}
            />
          );
        })}
      </div>
    </Animated>
  );
};

export default Projects;
