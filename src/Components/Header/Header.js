import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="navbar-container">
      <nav className="container">
        <NavLink to="/sign-in">Sign In</NavLink>
        <NavLink to="/register">Register</NavLink>
      </nav>
    </div>
  );
};

export default Header;
