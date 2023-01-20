import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGAc8Byred5Bp_WbfgLu5gJTpQAnX5EnE",
  authDomain: "camel-3c0d4.firebaseapp.com",
  projectId: "camel-3c0d4",
  storageBucket: "camel-3c0d4.appspot.com",
  messagingSenderId: "396486730271",
  appId: "1:396486730271:web:8310e3a8457341cbf4eb2a"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };