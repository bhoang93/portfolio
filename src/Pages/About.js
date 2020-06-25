import React from "react";
import { Animated } from "react-animated-css";
import CustomButton from "../Components/CustomButton";

import "./About.css";
import about from "../Images/About.jpg";
import CV from "../CV/CV.pdf";

const About = () => {
  return (
    <Animated animationIn="zoomInDown" animationOut="fadeOut" isVisible={true}>
      <div className="text">
        <img className="photo" alt="Brian Hoang" src={about} />

        <p>
          I am a self-taught web developer who has worked on projects for a wide
          array of clients, ranging from building fast and responsive websites,
          React Native mobile applications from the ground up and setting up
          servers and databases for e-commerce solutions.
        </p>
        <p>
          I have learned to work under pressure and in a fast paced environment,
          and pride myself on being able to take on new challenges and being
          able to learn new skills and technologies when necessary.
        </p>
        <p>
          I graduated from Goldsmiths, University of London with a bachelor's
          degree in Media and Communications. Over those three years I learnt a
          lot about ways to engage people in the content I create, which helps
          influence my ability to build websites and apps that are enjoyable and
          appealing for people to use.
        </p>
        <a href={CV} target="_blank">
          <CustomButton text="Link to CV" />
        </a>
        <div className="cornerImg" />
      </div>
    </Animated>
  );
};

export default About;
