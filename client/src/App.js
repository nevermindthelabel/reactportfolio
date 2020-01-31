import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import './Pages/style.css';

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Route exact path='/' component={Home} />
        <Route exact path='/portfolio' component={Portfolio} />        <Route exact path='/contact' component={Contact} />
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
