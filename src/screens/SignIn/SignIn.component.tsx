import React, { FC } from 'react';
import { routes } from '../../router';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from 'react-social-login-buttons';
import EmailAndPasswordSignIn, {
  SignInFormValues,
} from './EmailAndPasswordSignIn';
import {
  Grid,
  Box,
  CircularProgress,
  Container,
  Backdrop,
  Typography,
} from '@material-ui/core';

interface OwnProps {
  facebookSignIn(): void;
  googleSignIn(): void;
  onSubmit(values: SignInFormValues): void;
  userId: string;
  isLoading: boolean;
  error: string;
}

const SignInComponent: FC<OwnProps> = ({
  facebookSignIn,
  googleSignIn,
  onSubmit,
  userId,
  isLoading,
  error,
}) => {
  return (
    <div>
      {userId ? <Redirect to={routes.homePagePath} /> : null}
      <Container>
        <Grid container direction="column" alignItems="center" justify="center">
          {isLoading ? (
            <Backdrop open={true}>
              <CircularProgress />
            </Backdrop>
          ) : (
            <div>
              <Grid item>
                <Box paddingTop={4} />
                <EmailAndPasswordSignIn onSubmit={onSubmit} />
                {error ? error : null}
              </Grid>
              <Box paddingTop={1} />
              <Grid item>
                <GoogleLoginButton onClick={googleSignIn} />
              </Grid>
              <Box paddingTop={1} />
              <Grid item>
                <FacebookLoginButton onClick={facebookSignIn} />
              </Grid>
            </div>
          )}
          <Box paddingTop={5} />
          <Grid item>
            <Typography>
              You don't have an account?{' '}
              <Link to={routes.signUpPath}>Sign up now!</Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default SignInComponent;
