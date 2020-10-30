import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Navbar.css';

const Navbar = ({ title, icon }) => {
  return (
    <nav className='navbar'>
      <Link to='/'>
        <h1>
          <i className={icon} /> {title}
        </h1>
      </Link>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Movie Finder',
  icon: 'fas fa-ticket-alt',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
