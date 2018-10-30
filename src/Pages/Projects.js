import React from "react";
import Project from "../Components/Card";
import "./Projects.css";
import foodapp from "../Images/Projects/foodapp.png";
import facerecog from "../Images/Projects/facerecog.png";
import gem from "../Images/Projects/gem.png";
import dogapp from "../Images/Projects/dogapp.png";
import bluetail from "../Images/Projects/bluetail.png";

import { Animated } from "react-animated-css";

const blueTail = {
  title: "Blue Tail",
  img: bluetail,
  text:
    "Website for a dropping shipping company built using modern CSS techniques with stylish animations and transitions.",
  link: "https://bhoang93.github.io/bluetail/dist/index.html"
};

const foodApp = {
  title: "FoodApp",
  img: foodapp,
  text:
    "A progressive web app built in React where users can find places to eat using their current location or one they submit themselves.",
  link: "https://bhoang93.github.io/foodapp/"
};

const faceRecog = {
  title: "Face Recognition",
  img: facerecog,
  text:
    "A website using a face recognition API to detect faces and identify the demographics inside. Has a fully functioning log-in system with hashed passwords.",
  link: "http://facial-recog.herokuapp.com/"
};

const gemCalculator = {
  title: "Rainbow Gem Calculator",
  img: gem,
  text:
    "Tool for projecting currency for an online game, performing several calculations based on user inputs.",
  link: "https://bhoang93.github.io/gemcalculator/"
};

const picturesOfDogs = {
  title: "Pictures of Dogs",
  img: dogapp,
  text:
    "Website which fetches pictures of dogs from an API, displaying them in modals as well as feauturing infinite scrolling and a robust navigation system.",
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
              buttonLink={project.link}
            />
          );
        })}
      </div>
    </Animated>
  );
};

export default Projects;
