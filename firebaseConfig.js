// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5-co8-_IMaF2TT3_GKsvLRPizgGqm_kg",
  authDomain: "ashoka-689ca.firebaseapp.com",
  projectId: "ashoka-689ca",
  storageBucket: "ashoka-689ca.appspot.com",
  messagingSenderId: "1086253099140",
  appId: "1:1086253099140:web:6ec3a1a20361839ef7fad1",
  measurementId: "G-85HP1B9Y67",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);
const analytics = getAnalytics(firebaseApp);
