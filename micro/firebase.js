// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRjXwHEnFtSW0jvNZt0oejbyJf0hNBXOc",
  authDomain: "podcaster-19e0d.firebaseapp.com",
  projectId: "podcaster-19e0d",
  storageBucket: "podcaster-19e0d.appspot.com",
  messagingSenderId: "1040536592846",
  appId: "1:1040536592846:web:3152fa2938d531f9f30b9f",
  measurementId: "G-39FBFME0WK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);