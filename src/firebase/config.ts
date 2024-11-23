// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABxOmmhgFFpsSIAPaJ4W21LEnBZJ9x2Lk",
  authDomain: "s7-star-wars.firebaseapp.com",
  projectId: "s7-star-wars",
  storageBucket: "s7-star-wars.firebasestorage.app",
  messagingSenderId: "922080884480",
  appId: "1:922080884480:web:5db937ee630a3c2836a5e5",
  measurementId: "G-PSF1C9FW2Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)