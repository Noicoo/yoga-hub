import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserToken {
  userToken: string;
  error: string;
  isLoading: boolean;
}

const initialState: UserToken = {
  isLoading: false,
  error: '',
  userToken: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginRequest(state) {
      state.error = '';
      state.isLoading = true;
    },
    loginSuccess(state, action: PayloadAction<{ userToken: string }>) {
      state.error = '';
      state.isLoading = false;
      state.userToken = action.payload.userToken;
    },
    loginFailure(state, action: PayloadAction<{ error: string }>) {
      state.error = action.payload.error;
      state.isLoading = false;
    },
  },
});

export const { loginRequest, loginFailure, loginSuccess } = loginSlice.actions;

export default loginSlice.reducer;
