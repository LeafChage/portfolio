import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { Route } from '../setting/Route';

const Header: React.SFC = () => (
  <header>
    <ul>
      <li>
        <Link to={Route.Profile}>profile</Link>
      </li>
      <li>
        <Link to={Route.Blog}>blog</Link>
      </li>
    </ul>
  </header>
);

export default Header;
