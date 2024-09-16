// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDihiTIMvic0jhWHKxpBxoBDvOW2Q_UvWc",
  authDomain: "capstone-project-219bd.firebaseapp.com",
  projectId: "capstone-project-219bd",
  storageBucket: "capstone-project-219bd.appspot.com",
  messagingSenderId: "1001634433582",
  appId: "1:1001634433582:web:38d3ae206e1ab7c70dedbf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
