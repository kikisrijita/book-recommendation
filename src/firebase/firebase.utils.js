import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA3UFnJB9ltCFnUEwY6uL1ZUy5AOE0VWXM",
  authDomain: "crown-db-fd52f.firebaseapp.com",
  databaseURL: "https://crown-db-fd52f.firebaseio.com",
  projectId: "crown-db-fd52f",
  storageBucket: "crown-db-fd52f.appspot.com",
  messagingSenderId: "470116786520",
  appId: "1:470116786520:web:34403924871c587f27852d",
  measurementId: "G-8Y8W9Y9N94"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
