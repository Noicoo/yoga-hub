import React, { FC, useEffect } from 'react';
import fireApi from '../../services/firebase';
import { useDispatch } from 'react-redux';
import { userOperations } from '../../redux/user';
import { SignInFormValues } from './EmailAndPasswordSignIn';
import SignInComponent from './SignIn.component';

const SignIn: FC = () => {
  const dispatch = useDispatch();

  const onEmailAndPasswordSubmit = (values: SignInFormValues) => {
    dispatch(
      userOperations.checkEmailAndPasswordLogin(values.email, values.password)
    );
  };

  useEffect(() => {
    dispatch(userOperations.checkSocialMediaRedirect());
  }, [dispatch]);

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
    />
  );
};

export default SignIn;
