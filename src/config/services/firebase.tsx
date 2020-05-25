import firebase from 'firebase';
import * as envVariables from './envVariables';

const {
  fireApiKey,
  fireAppId,
  fireAuthDomain,
  fireDatabaseURL,
  fireMeasurementId,
  fireMessagingSenderId,
  fireProjectId,
  fireStorageBucket,
} = envVariables;

export const firebaseConfig = {
  apiKey: fireApiKey,
  authDomain: fireAuthDomain,
  databaseURL: fireDatabaseURL,
  projectId: fireProjectId,
  storageBucket: fireStorageBucket,
  messagingSenderId: fireMessagingSenderId,
  appId: fireAppId,
  measurementId: fireMeasurementId,
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
