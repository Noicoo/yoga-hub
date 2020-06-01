import { RootState } from '../rootReducer';

const isLoading = (state: RootState) => {
  return state.user.isLoading;
};

const userId = (state: RootState) => {
  return state.user.userId;
};

const error = (state: RootState) => {
  return state.user.error;
};

export { isLoading, userId, error };
