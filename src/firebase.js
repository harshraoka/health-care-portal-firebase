import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD4We15LWmb3gCjoAqhfqota9d54oUDfQg",
  authDomain: "health-88934.firebaseapp.com",
  projectId: "health-88934",
  storageBucket: "health-88934.appspot.com",
  messagingSenderId: "865231420112",
  appId: "1:865231420112:web:66fc98efd8732253a9bcd5"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();

export { db };