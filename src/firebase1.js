import firebase from 'firebase/compat/app';
import "firebase/firestore";

const config = {
   //paste your api info here like api keys, auth domain, peoject id, etc.
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const firestore = firebase.firestore();

export { firestore };
