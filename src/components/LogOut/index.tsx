import React, { FC } from 'react';
import fireApi from '../../services/firebase';
import { useDispatch } from 'react-redux';
import { userActions } from '../../redux/user';
import { routes } from '../../router';
import LogOutComponent from './LogOut.component';

const LogOut: FC = () => {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(userActions.logOut());
    //hard refresh needed, https://stackoverflow.com/questions/39089901/firebase-getredirectresult-is-being-called-after-logout
    fireApi.doSignOut
      .then(() => {
        window.location.href = routes.homePagePath;
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <LogOutComponent onClick={logOut} />
    </>
  );
};

export default LogOut;
