import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA-_XThFgiaoPzBk8H8hZf02L_Mn80dLZI",
  authDomain: "labour-managment-app.firebaseapp.com",
  projectId: "labour-managment-app",
  storageBucket: "labour-managment-app.appspot.com",
  messagingSenderId: "201425679540",
  appId: "1:201425679540:web:97345ea1151ddf54eb93e1",
  measurementId: "G-NGMDQG8YK3"
};


// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };
