import React from 'react';
import './Card.css'
import { Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';

const Project = ({ cardTitle, cardText, cardImg, buttonLink }) => {
  return (
    <div>
      <Card className="projects">
        <CardImg className="cardImg" src={cardImg} alt="Card image cap" />
        <CardBody>
          <CardTitle className="cardTitle">{cardTitle}</CardTitle>
          <CardText>{cardText}</CardText>
        </CardBody>
        <a href={buttonLink}><Button color="success" className="projectButton">Visit Site</Button></a>
      </Card>
    </div>
  );
};

export default Project;
