// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "urbanutopia-92700.firebaseapp.com",
  projectId: "urbanutopia-92700",
  storageBucket: "urbanutopia-92700.appspot.com",
  messagingSenderId: "757969678969",
  appId: "1:757969678969:web:5682c39077ae993e295aa8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
