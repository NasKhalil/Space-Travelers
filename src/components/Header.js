import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/planet.png';

const Header = () => (
  <>
    <header>
      <div className="logo">
        {' '}
        <img src={logo} alt="logo" className="mylogo" />
        {' '}
        <h1>Space Travelers Hub</h1>
      </div>
      <nav>
        <NavLink
          to="/profile"
          activeClassName="active"
        >
          {' '}
          My profile
        </NavLink>
        <NavLink
          to="/rockets"
          activeClassName="active"
        >
          Rockets
        </NavLink>
      </nav>
    </header>
  </>
);

export default Header;
