import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';

import Wrapper from '../components/Wrapper';
import Navigation from '../components/Navigation';
import ProfileCard from '../components/Cards';
import Footer from '../components/Footer';
import Projects from '../projects/projects.json';

const Portfolio = () => {
  return (
    <Fragment>
      <Navigation />
      <Container className="portfolio" fluid="true">
        <h1 className="p-5 text-white">Portfolio</h1>
        <Container>
          <Wrapper>
            {Projects.map(project => (
              <ProfileCard
                key={project.id}
                image={project.image}
                title={project.projectTitle}
                text={project.projectText}
              />
            ))}
          </Wrapper>
        </Container>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default Portfolio;
