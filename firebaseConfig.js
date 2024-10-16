import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCzEVJ3YQLyshRAt6G0ybzQor_DsGuJos",
  authDomain: "vehcileemissiontests.firebaseapp.com",
  projectId: "vehcileemissiontests",
  storageBucket: "vehcileemissiontests.appspot.com",
  messagingSenderId: "289779189026",
  appId: "1:289779189026:web:d53fd0e4fa1e378db7917b",
  measurementId: "G-CG81M5VRRN",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };
