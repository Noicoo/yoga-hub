import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from './index';

const Navigation = () => (
  <div>
    <ul>
      <li>
        <Link to={routes.homePagePath}>Home</Link>
      </li>
      <li>
        <Link to={routes.signInPath}>Sign In</Link>
      </li>
    </ul>
  </div>
);

export default Navigation;
