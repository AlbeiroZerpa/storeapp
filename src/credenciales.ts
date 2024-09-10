import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCqdKGFMcakTkayqE_2HxousyO-Y3rDp9c",
  authDomain: "login-1da75.firebaseapp.com",
  projectId: "login-1da75",
  storageBucket: "login-1da75.appspot.com",
  messagingSenderId: "294571659288",
  appId: "1:294571659288:web:8c4a53d6b802ac732af36d",
  measurementId: "G-2LE4QGJ3VJ"
};

const appFirebase = initializeApp(firebaseConfig);
export default appFirebase