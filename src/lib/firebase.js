// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCILW2Tx7hUBshnAFEPfvKnqOBK0H25bes",
  authDomain: "task-manager-34f7a.firebaseapp.com",
  projectId: "task-manager-34f7a",
  storageBucket: "task-manager-34f7a.appspot.com",
  messagingSenderId: "170706545413",
  appId: "1:170706545413:web:9b02b29266ca6e8561256c",
  measurementId: "G-SLRRF154VP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
