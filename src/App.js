import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Layout/Navbar';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Howtouse from './components/pages/Howtouse';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/about' component={About}></Route>
            <Route exact path='/howtouse' component={Howtouse}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
