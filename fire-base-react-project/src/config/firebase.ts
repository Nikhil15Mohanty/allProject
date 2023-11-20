// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBkL7CtGZjqcoiuaPT_Ct1Ji9pi0x1u6g",
  authDomain: "react-project-99f0e.firebaseapp.com",
  projectId: "react-project-99f0e",
  storageBucket: "react-project-99f0e.appspot.com",
  messagingSenderId: "267661253565",
  appId: "1:267661253565:web:267467d2af574707b610d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);