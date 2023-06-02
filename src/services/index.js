// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import {getFirestore} from "firebase/firestore"
/* import * as firebase from 'firebase' */
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqcgJ4Vphm6SVIkde1g6OzOljLCwt7B5k",
  authDomain: "assissoftware-rrhh.firebaseapp.com",
  projectId: "assissoftware-rrhh",
  storageBucket: "assissoftware-rrhh.appspot.com",
  messagingSenderId: "386360182320",
  appId: "1:386360182320:web:0da04577a9fe737d2ecff5",
  measurementId: "G-6PT09GHW30"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
/* 
export const auth = new firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
 */


