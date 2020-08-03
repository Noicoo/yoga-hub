import firebase from 'firebase';
import 'firebase/firestore';
import { firebaseConfig } from '../config';

const fire = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const fireAuth = fire.auth();

const fireApi = {
  //Auth API
  addToDb: (collectionName: string, addedItem: object) =>
    db.collection(collectionName).add(addedItem),
  getCollectionFromDb: (collectionName: string) =>
    db.collection(collectionName),
  doCreateUserWithEmailAndPassword: (email: string, password: string) =>
    fireAuth.createUserWithEmailAndPassword(email, password),

  googleProvider: new firebase.auth.GoogleAuthProvider(),

  facebookProvider: new firebase.auth.FacebookAuthProvider(),

  doGoogleSignIn: (googleProvider: firebase.auth.AuthProvider) =>
    fireAuth.signInWithRedirect(googleProvider),

  doFacebookSignIn: (facebookProvider: firebase.auth.AuthProvider) =>
    fireAuth.signInWithRedirect(facebookProvider),

  doGetSocialMediaRedirectResult: fireAuth.getRedirectResult(),

  doSignInWithEmailAndPassword: (email: string, password: string) =>
    fireAuth.signInWithEmailAndPassword(email, password),

  doSignOut: firebase.auth().signOut(),

  doPasswordReset: (email: string) => fireAuth.sendPasswordResetEmail(email),

  // doPasswordUpdate: (password: string) => fireAuth.currentUser.updatePassword(password),

  // doDeleteAccount: () => fireAuth.currentUser.delete()
};

export default fireApi;
