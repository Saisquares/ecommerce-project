// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6sKxlUuA40cATG_7kVybj9E4YS0r1QoA",
  authDomain: "ecommerce-project-50565.firebaseapp.com",
  projectId: "ecommerce-project-50565",
  storageBucket: "ecommerce-project-50565.appspot.com",
  messagingSenderId: "704173697679",
  appId: "1:704173697679:web:b683e9d08e0df161aa5efa",
  measurementId: "G-7MW2TRSCVE"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();