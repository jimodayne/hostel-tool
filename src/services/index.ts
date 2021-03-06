import firebase from 'firebase';
import FIREBASE_CONFIG from '../constants/firebase';

if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG);
}

export const auth = firebase.auth();
export const db = firebase.firestore;

const googleProvider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider)
    .catch(error => {
        console.log(error.message);
    });
};
