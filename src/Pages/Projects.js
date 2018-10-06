import React from "react";
import Project from "../Components/Card";
import "./Projects.css";
import foodapp from "../Images/Projects/foodapp.png";
import facerecog from "../Images/Projects/facerecog.png";
import gem from "../Images/Projects/gem.png";
import dogapp from "../Images/Projects/dogapp.png";

import { Animated } from "react-animated-css";

const foodApp = {
  title: "FoodApp",
  text:
    "A progressive web app built in React where users can find places to eat using their current location or one they submit themselves."
};

const faceRecog = {
  title: "Face Recognition",
  text:
    "A website using a face recognition API to detect faces and identify the demographics inside. Has a fully functioning log-in system with hashed passwords."
};

const gemCalculator = {
  title: "Rainbow Gem Calculator",
  text:
    "Tool for projecting currency for an online game, performing several calculations based on user inputs."
};

const picturesOfDogs = {
  title: "Pictures of Dogs",
  text:
    "Website which fetches pictures of dogs from an API, displaying them in modals as well as feauturing infinite scrolling and a robust navigation system."
};

const Projects = () => {
  return (
    <Animated animationIn="zoomInDown" animationOut="fadeOut" isVisible={true}>
      <div id="projectGrid">
        <Project
          cardTitle={foodApp.title}
          cardText={foodApp.text}
          cardImg={foodapp}
          buttonLink="https://bhoang93.github.io/foodapp/"
        />
        <Project
          cardTitle={faceRecog.title}
          cardText={faceRecog.text}
          cardImg={facerecog}
          buttonLink="http://facial-recog.herokuapp.com/"
        />
        <Project
          cardTitle={gemCalculator.title}
          cardText={gemCalculator.text}
          cardImg={gem}
          buttonLink="https://bhoang93.github.io/gemcalculator/"
        />
        <Project
          cardTitle={picturesOfDogs.title}
          cardText={picturesOfDogs.text}
          cardImg={dogapp}
          buttonLink="https://bhoang93.github.io/dog-app/"
        />
      </div>
    </Animated>
  );
};

export default Projects;
