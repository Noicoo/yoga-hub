import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from './index';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';
import { userSelectors } from '../redux/user';
import LogOut from '../components/LogOut';

const Navigation = () => {
  const userId = useSelector((state: RootState) =>
    userSelectors.getUserId(state)
  );
  return (
    <div>
      <ul>
        <li>
          <Link to={routes.homePagePath}>Home</Link>
        </li>
        <li>
          {userId ? <LogOut /> : <Link to={routes.signInPath}>Sign In</Link>}
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
