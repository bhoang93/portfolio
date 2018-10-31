import React from "react";
import "./Card.css";
import CustomButton from "./CustomButton.js";

const Project = ({ cardTitle, cardText, cardImg, skills, buttonLink }) => {
  return (
    <div className="projects">
      <img className="cardImg" src={cardImg} alt="Card image" />
      <div className="cardInfo">
        <h2 className="cardTitle">{cardTitle}</h2>
        <p className="cardText">{cardText}</p>
        <div className="techUsed">
          <div className="techUsedLogos">
            {skills.map(logo => {
              return <img className="skillLogoCard" src={logo} alt="logo" />;
            })}
          </div>
        </div>
        <a href={buttonLink}>
          <CustomButton text="Visit Site" />
        </a>
      </div>
    </div>
  );
};

export default Project;
