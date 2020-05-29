import { userActions } from './index';
import { fireApi } from '../../services/firebase';

export const checkSocialMediaRedirect = () => {
  return (dispatch: any) => {
    fireApi.doGetSocialMediaRedirectResult
      .then((result) => {
        if (result.user) {
          dispatch(userActions.loginSuccess(result.user.uid));
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(userActions.loginFailure(errorMessage));
      });
  };
};

export const checkEmailAndPasswordLogin = (email: string, password: string) => {
  return (dispatch: any) => {
    fireApi
      .doSignInWithEmailAndPassword(email, password)
      .then((result) => {
        if (result.user) {
          dispatch(userActions.loginSuccess(result.user.uid));
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(userActions.loginFailure(errorMessage));
      });
  };
};
