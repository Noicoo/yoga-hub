import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  userId: string;
  error: string;
  isLoading: boolean;
}

const initialState: UserState = {
  isLoading: false,
  error: '',
  userId: '',
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
      prepare(userId) {
        return { payload: { userId } };
      },
      reducer(state, action: PayloadAction<{ userId: string }>) {
        state.error = '';
        state.isLoading = false;
        state.userId = action.payload.userId;
      },
    },
    loginFailure: {
      prepare(error) {
        return { payload: { error } };
      },
      reducer(state, action: PayloadAction<{ error: string }>) {
        state.error = action.payload.error;
        state.isLoading = false;
        state.userId = '';
      },
    },
    logOut(state) {
      state.userId = '';
      state.isLoading = false;
    },
  },
});
