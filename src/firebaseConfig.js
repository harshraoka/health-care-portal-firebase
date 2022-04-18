// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4We15LWmb3gCjoAqhfqota9d54oUDfQg",
  authDomain: "health-88934.firebaseapp.com",
  projectId: "health-88934",
  storageBucket: "health-88934.appspot.com",
  messagingSenderId: "865231420112",
  appId: "1:865231420112:web:66fc98efd8732253a9bcd5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFireStore(app);