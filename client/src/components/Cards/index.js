import React from 'react';
import { Card } from 'react-bootstrap';
import './style.css';

const ProjectCard = props => {
  return (
      <Card>
        <Card.Title>
          <h3 className="text-center">{props.title}</h3>
        </Card.Title>
        <Card.Img src={props.image} alt={props.title} />
        <Card.Body>
          <Card.Text>{props.text}</Card.Text>
        </Card.Body>
      </Card>
  );
};

export default ProjectCard;
