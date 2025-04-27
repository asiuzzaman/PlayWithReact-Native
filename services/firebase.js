// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSvEaMIlTw11OlrrqnP-D5m-372AYr9fE",
  authDomain: "hospital-booking-app-a949d.firebaseapp.com",
  projectId: "hospital-booking-app-a949d",
  storageBucket: "hospital-booking-app-a949d.firebasestorage.app",
  messagingSenderId: "686769396882",
  appId: "1:686769396882:web:b4d47b6d6f76068e6f5a4b",
  measurementId: "G-9V3VSWCZN7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
