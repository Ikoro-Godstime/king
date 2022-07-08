import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// ? this will be hidden in an envirnoment variable

// ? Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAh8uUdd9yX6nZyDxq0upJ88NKLk8Xjvw",
  authDomain: "smartearnersinvestment-540d9.firebaseapp.com",
  projectId: "smartearnersinvestment-540d9",
  storageBucket: "smartearnersinvestment-540d9.appspot.com",
  messagingSenderId: "893835246703",
  appId: "1:893835246703:web:e1b6bba1cfb76f71f9e19a",
};

// ? Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const bucket = getStorage(app);
