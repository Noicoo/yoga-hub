import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  userToken: string;
  error: string;
  isLoading: boolean;
}

const initialState: UserState = {
  isLoading: false,
  error: '',
  userToken: '',
};

export default createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginRequest(state) {
      state.error = '';
      state.isLoading = true;
    },
    loginSuccess: {
      prepare(userToken) {
        return { payload: { userToken } };
      },
      reducer(state, action: PayloadAction<{ userToken: string }>) {
        state.error = '';
        state.isLoading = false;
        state.userToken = action.payload.userToken;
      },
    },
    loginFailure: {
      prepare(error) {
        return { payload: { error } };
      },
      reducer(state, action: PayloadAction<{ error: string }>) {
        state.error = action.payload.error;
        state.isLoading = false;
        state.userToken = '';
      },
    },
  },
});
