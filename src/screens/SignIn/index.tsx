import React, { FC, useEffect } from 'react';
import { fireApi } from '../../services/firebase';
import { routes } from '../../router';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions, userOperations, userSelectors } from '../../redux/user';
import { RootState } from '../../redux/rootReducer';
import { Redirect } from 'react-router-dom';
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from 'react-social-login-buttons';
import EmailAndPasswordSignIn from './EmailAndPasswordSignIn';

const SignIn: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userOperations.checkSocialMediaRedirect());
  }, [dispatch]);

  const googleSignIn = () => {
    dispatch(userActions.loginRequest());
    fireApi.doGoogleSignIn(fireApi.googleProvider);
  };

  const facebookSignIn = () => {
    dispatch(userActions.loginRequest());
    fireApi.doFacebookSignIn(fireApi.facebookProvider);
  };

  const userId = useSelector((state: RootState) =>
    userSelectors.getUserId(state)
  );
  const isLoading = useSelector((state: RootState) =>
    userSelectors.getUserIsLoading(state)
  );
  const error = useSelector((state: RootState) =>
    userSelectors.getUserError(state)
  );

  return (
    <>
      {userId ? <Redirect to={routes.homePagePath} /> : null}

      {isLoading ? (
        'loading'
      ) : (
        <>
          <EmailAndPasswordSignIn />
          {error ? error : null}
          <GoogleLoginButton onClick={googleSignIn} />
          <FacebookLoginButton onClick={facebookSignIn} />
        </>
      )}

      <div>
        You don't have an account?{' '}
        <Link to={routes.signUpPath}>Sign up now!</Link>
      </div>
    </>
  );
};

export default SignIn;
