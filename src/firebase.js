import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBan-MXRsrXugHpI42jcK8LIRxWDarY3UU",
  authDomain: "clone-840bb.firebaseapp.com",
  databaseURL: "https://clone-840bb.firebaseio.com",
  projectId: "clone-840bb",
  storageBucket: "clone-840bb.appspot.com",
  messagingSenderId: "565367589425",
  appId: "1:565367589425:web:3e682a56a88ff0e012a310",
  measurementId: "G-QY7G9TX626",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

//initialize db
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
