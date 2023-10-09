import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQaqbRSwS9WM5f6m-uDZypvZd7Qq56IQc",
  authDomain: "clone-51cee.firebaseapp.com",
  projectId: "clone-51cee",
  storageBucket: "clone-51cee.appspot.com",
  messagingSenderId: "720173441911",
  appId: "1:720173441911:web:b12d801612d19c38f53772",
  measurementId: "G-KM5JG7GF05"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };