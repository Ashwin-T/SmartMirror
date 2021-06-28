import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAQGH73pwW3lcMhZZkrgTloGEa09StOB2Q",
    authDomain: "smartmirror-17d68.firebaseapp.com",
    projectId: "smartmirror-17d68",
    storageBucket: "smartmirror-17d68.appspot.com",
    messagingSenderId: "782610614809",
    appId: "1:782610614809:web:96e331d39cb59c5e1b7888",
    measurementId: "G-FPETT3Q4PS"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
