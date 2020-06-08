import React, { FC, useEffect } from 'react';
import fireApi from '../../services/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { userOperations, userSelectors } from '../../redux/user';
import { SignInFormValues } from './EmailAndPasswordSignIn';
import SignInComponent from './SignIn.component';

const SignIn: FC = () => {
  const userId = useSelector(userSelectors.userId);
  const isLoading = useSelector(userSelectors.isLoading);
  const error = useSelector(userSelectors.error);
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
      userId={userId}
      isLoading={isLoading}
      error={error}
    />
  );
};

export default SignIn;
