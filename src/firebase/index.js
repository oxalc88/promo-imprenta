import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyB8XMNbbVp-Pgz4fW-K_OFzLt6kkivvuaw",
    authDomain: "promo-imprenta.firebaseapp.com",
    projectId: "promo-imprenta",
    storageBucket: "promo-imprenta.appspot.com",
    messagingSenderId: "713580423708",
    appId: "1:713580423708:web:ddd251f23b0e0156c70dd9",
    measurementId: "G-CS3TDGFFW5"
});

export const getFirebase = () => app

export const getFirestore = () => firebase.firestore(app)