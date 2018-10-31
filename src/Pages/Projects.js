import React from "react";
import Project from "../Components/Card";
import "./Projects.css";
import foodapp from "../Images/Projects/foodapp.png";
import facerecog from "../Images/Projects/facerecog.png";
import gem from "../Images/Projects/gem.png";
import dogapp from "../Images/Projects/dogapp.png";
import bluetail from "../Images/Projects/bluetail.png";

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

import { Animated } from "react-animated-css";

const blueTail = {
  title: "Blue Tail",
  img: bluetail,
  text:
    "Website for a dropping shipping company built using modern CSS techniques with stylish animations and transitions.",
  skills: [html5, css3, sass],
  link: "https://bhoang93.github.io/bluetail/dist/index.html"
};

const foodApp = {
  title: "FoodApp",
  img: foodapp,
  text:
    "A progressive web app built in React where users can find places to eat using their current location or one they submit themselves.",
  skills: [reactLogo, es6, css3, bootstrap],
  link: "https://bhoang93.github.io/foodapp/"
};

const faceRecog = {
  title: "Face Recognition",
  img: facerecog,
  text:
    "A website using a face recognition API to detect faces and identify the demographics inside. Has a fully functioning log-in system with hashed passwords.",
  skills: [reactLogo, es6, css3, postgresql, redis, express],
  link: "http://facial-recog.herokuapp.com/"
};

const gemCalculator = {
  title: "Rainbow Gem Calculator",
  img: gem,
  text:
    "Tool for projecting currency for an online game, performing several calculations based on user inputs.",
  skills: [reactLogo, es6, css3],
  link: "https://bhoang93.github.io/gemcalculator/"
};

const picturesOfDogs = {
  title: "Pictures of Dogs",
  img: dogapp,
  text:
    "Website which fetches pictures of dogs from an API, displaying them in modals as well as feauturing infinite scrolling and a robust navigation system.",
  skills: [reactLogo, es6, css3],
  link: "https://bhoang93.github.io/dog-app/"
};

const projectList = [
  blueTail,
  foodApp,
  faceRecog,
  gemCalculator,
  picturesOfDogs
];

const Projects = () => {
  return (
    <Animated animationIn="zoomInDown" animationOut="fadeOut" isVisible={true}>
      <div id="projectGrid">
        {projectList.map(project => {
          return (
            <Project
              cardTitle={project.title}
              cardText={project.text}
              cardImg={project.img}
              skills={project.skills}
              buttonLink={project.link}
            />
          );
        })}
      </div>
    </Animated>
  );
};

export default Projects;
