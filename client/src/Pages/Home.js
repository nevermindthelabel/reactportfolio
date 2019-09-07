import React, { Fragment } from 'react';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <Fragment>
      <Navigation />
      <div className="container">
        <h1>Home</h1>
      </div>
      <Footer />
    </Fragment>
  );
}

export default Home;
