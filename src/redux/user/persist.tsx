import storage from 'redux-persist/lib/storage';

export const userConfig = {
  key: 'user',
  storage,
  blacklist: ['error'],
};
