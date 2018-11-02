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
          I am a self-taught web developer. While working as a graphic designer
          and video editor, I had some opportunities to work on some projects
          that required some basic coding for web design. This sparked my
          interest is web development and I have been continuously learning and
          improving on my skills ever since. I enjoy both the technical and
          creative sides of coding, with the solving of interesting and complex
          problems combined with the endeavour to create visually appealing
          design making it a field that is very exciting to work in.
        </p>
        <p>
          I graduated from Goldsmiths, University of London with a bachelor's
          degree in Media and Communications. Over those three years I learnt a
          lot about ways to engage people in the content I create, which helps
          influence by ability to build websites and apps that are enjoyable and
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
