import React, { Fragment } from 'react';
import Wrapper from '../components/Wrapper';
import Navigation from '../components/Navigation';
import ProfileCard from '../components/Cards';
import Footer from '../components/Footer';
import Projects from '../projects/projects.json';

const Portfolio = () => {
  return (
    <Fragment>
      <Navigation />
      <div className="container">
        <h1 className="mb-5 mt-5">Portfolio</h1>
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
      </div>
      <Footer />
    </Fragment>
  );
};

export default Portfolio;
