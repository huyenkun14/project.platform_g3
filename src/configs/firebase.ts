// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASh_XgagJGJ2e4PtW8BU8bibHjo4oI8z0",
  authDomain: "platform-65cs1.firebaseapp.com",
  projectId: "platform-65cs1",
  storageBucket: "platform-65cs1.appspot.com",
  messagingSenderId: "309008714254",
  appId: "1:309008714254:web:459b3d87baa9ec880dca5f",
  measurementId: "G-EP2VWFVDJN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);