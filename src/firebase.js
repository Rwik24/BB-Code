import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmszwG8poLmRkfbfTK6Y3TywusUhsOCr0",
  authDomain: "react-auth-bb.firebaseapp.com",
  projectId: "react-auth-bb",
  storageBucket: "react-auth-bb.appspot.com",
  messagingSenderId: "46564756841",
  appId: "1:46564756841:web:f967dbbf4f66fd443781f8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore instance

export { app, auth, db }; // Export all initialized instances

export default app;