import { RootState } from '../rootReducer';

const getUserIsLoading = (state: RootState) => {
  return state.user.isLoading;
};

const getUserId = (state: RootState) => {
  return state.user.userId;
};

const getUserError = (state: RootState) => {
  return state.user.error;
};

export { getUserIsLoading, getUserId, getUserError };
