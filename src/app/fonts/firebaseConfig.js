import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_x3SjcTxo8uiLjDS91b5rdW5qN7mJgqA",
  authDomain: "vehicle-emission-test.firebaseapp.com",
  projectId: "vehicle-emission-test",
  storageBucket: "vehicle-emission-test.appspot.com",
  messagingSenderId: "132287611",
  appId: "1:132287611:web:7ac964445743ec5de066de",
  measurementId: "G-GBVLYQV8Q9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };
