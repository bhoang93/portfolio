import React from "react";
import CustomButton from "./CustomButton.js";
import styled from "styled-components";

const Project = ({ cardTitle, cardText, cardImg, skills, buttonLink }) => {
  return (
    <Container invert={cardTitle === "White & Co"}>
      <img src={cardImg} alt={cardTitle} />
      <p>{cardText}</p>
      <SkillsContainer>
        {skills.map((skill) => {
          return <img src={skill} />;
        })}
      </SkillsContainer>
      <a href={buttonLink} target="_blank">
        <CustomButton text="View" />
      </a>
    </Container>
  );
};

const SkillsContainer = styled.div`
  background: #40bcd8;
  padding: 10px;

  & img {
    width: 40px;
    margin-right: 5px;

    @media only screen and (max-width: 1200px) {
      width: 30px;
    }
  }
`;

const Container = styled.div`
  & > img {
    height: 50px;
    margin-bottom: 15px;
    ${(props) =>
      props.invert &&
      `filter: invert(1);
      height: 30px;
      margin-top: 20px;
      margin-bottom: 15px;
      `}
  }

  background: white;
  flex: 1;
  border-radius: 5px;
  padding: 15px;

  & h2 {
    color: #40bcd8;
  }

  & p {
    color: black;
    font-size: 1.6rem;
    line-height: 2.6rem;
    height: 50px;

    @media only screen and (max-width: 1200px) {
      font-size: 1.4rem;
      line-height: 2.4rem;
    }
  }

  &:not(:last-of-type) {
    margin-right: 20px;
  }

  @media only screen and (max-width: 1200px) {
    &:not(:last-of-type) {
      margin-right: 0px;
      margin-bottom 20px;
    }
  }
`;

export default Project;
