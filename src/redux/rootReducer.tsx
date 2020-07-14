import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { persistConfig } from './persistConfig';
import { userConfig } from './user/persist';
import userReducer from './user';

const rootReducer = combineReducers({
  user: persistReducer(userConfig, userReducer),
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
