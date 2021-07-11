import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAajEHLjsDYWaMVfm10UfJ4xc74ouZbsBk",
  authDomain: "slack-d1b61.firebaseapp.com",
  projectId: "slack-d1b61",
  storageBucket: "slack-d1b61.appspot.com",
  messagingSenderId: "1004836668453",
  appId: "1:1004836668453:web:a361fb336d4db408922bcc",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
