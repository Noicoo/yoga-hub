import { combineReducers } from '@reduxjs/toolkit';
import loginReducer from './login/slice';

const rootReducer = combineReducers({
  login: loginReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
