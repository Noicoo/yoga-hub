import React, { FC, useEffect } from 'react';
import fireApi from '../../services/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { userOperations, userSelectors } from '../../redux/user';
import { SignInFormValues } from './EmailAndPasswordSignIn';
import SignInComponent from './SignIn.component';
import { userActions } from '../../redux/user';
import { useLocation } from 'react-router-dom';

const SignIn: FC = () => {
  const userId = useSelector(userSelectors.userId);
  const isLoading = useSelector(userSelectors.isLoading);
  const error = useSelector(userSelectors.error);
  const location = useLocation();
  const dispatch = useDispatch();

  const onEmailAndPasswordSubmit = (values: SignInFormValues) => {
    dispatch(
      userOperations.checkEmailAndPasswordLogin(values.email, values.password)
    );
  };

  useEffect(() => {
    dispatch(userOperations.checkSocialMediaRedirect());
  }, [dispatch]);

  useEffect(() => {
    //persist work on a local storage level, which is fine
    //but that means that if I write bad login credentials and get an error
    //then click navigate to some other page (ex homepage) and come
    //back to the login page, I can still see the error
    //I am using this hook, to be called every time the location constant
    //is initialized (that is, every time i click on the login page)
    //so that the error is set to ''.
    dispatch(userActions.resetError());
  }, [dispatch, location]);

  const googleSignIn = () => {
    fireApi.doGoogleSignIn(fireApi.googleProvider);
  };

  const facebookSignIn = () => {
    fireApi.doFacebookSignIn(fireApi.facebookProvider);
  };

  return (
    <SignInComponent
      onSubmit={onEmailAndPasswordSubmit}
      facebookSignIn={facebookSignIn}
      googleSignIn={googleSignIn}
      userId={userId}
      isLoading={isLoading}
      error={error}
    />
  );
};

export default SignIn;
