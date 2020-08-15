import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ title }) => {
  return (
    <div className='navbar navbar-dark bg-dark'>
      <NavLink to='/'>
        <h1>{title}</h1>
      </NavLink>

      <ul>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/howtouse'>How to use?</Link>
        </li>
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: 'News Classifier',
};

export default Navbar;
