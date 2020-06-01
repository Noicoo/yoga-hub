import React, { FC } from 'react';
import { routes } from '../../router';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userSelectors } from '../../redux/user';
import { RootState } from '../../redux/rootReducer';
import { Redirect } from 'react-router-dom';
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from 'react-social-login-buttons';
import EmailAndPasswordSignIn, {
  SignInFormValues,
} from './EmailAndPasswordSignIn';

interface OwnProps {
  facebookSignIn(): void;
  googleSignIn(): void;
  onSubmit(values: SignInFormValues): void;
}

const SignInComponent: FC<OwnProps> = ({
  facebookSignIn,
  googleSignIn,
  onSubmit,
}) => {
  const userId = useSelector((state: RootState) => userSelectors.userId(state));
  const isLoading = useSelector((state: RootState) =>
    userSelectors.isLoading(state)
  );
  const error = useSelector((state: RootState) => userSelectors.error(state));

  return (
    <>
      {userId ? <Redirect to={routes.homePagePath} /> : null}

      {isLoading ? (
        'loading'
      ) : (
        <>
          <EmailAndPasswordSignIn onSubmit={onSubmit} />
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

export default SignInComponent;
