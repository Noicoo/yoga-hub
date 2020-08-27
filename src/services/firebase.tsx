import firebase from 'firebase';
import 'firebase/firestore';
import { firebaseConfig } from '../config';
import youTubeApi from './youTube';
import { AddVideoFormUrl } from '../screens/AddVideo/AddVideoFormik';

const fire = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const fireAuth = fire.auth();

const fireApi = {
  //Auth API
  checkIfVideoExists: (videoId: string) =>
    db
      .collection('videos')
      .where('id', '==', videoId)
      .get()
      .then((querySnapshot) => querySnapshot.empty),
  addVideoToDb: (videoId: string, video: AddVideoFormUrl, userId: string) =>
    youTubeApi.getVideoInfo(videoId).then((youTubeData) => {
      db.collection('videos').add({
        ...youTubeData,
        rating: video.rating,
        level: video.level,
        user: userId,
      });
    }),
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
