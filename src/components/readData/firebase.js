import firebase from "firebase/app";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyD4We15LWmb3gCjoAqhfqota9d54oUDfQg",
    authDomain: "health-88934.firebaseapp.com",
    projectId: "health-88934",
    storageBucket: "health-88934.appspot.com",
    messagingSenderId: "865231420112",
    appId: "1:865231420112:web:66fc98efd8732253a9bcd5"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const firestore = firebase.firestore();

export { firestore };