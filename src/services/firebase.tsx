import firebase from 'firebase';
import { firebaseConfig } from '../config';

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
