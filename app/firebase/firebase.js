import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Import Firebase Storage

const firebaseConfig = {
  apiKey: "AIzaSyDt_9mf-5epnBt6Tu34cA9ZUp4GIcnsMK8",
  authDomain: "capstonesign-91f05.firebaseapp.com",
  projectId: "capstonesign-91f05",
  storageBucket: "capstonesign-91f05.appspot.com",
  messagingSenderId: "395849459674",
  appId: "1:395849459674:web:e7c376aa3ed144d15282e3",
  measurementId: "G-DRMJDRPVZ9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app); // Initialize Firebase Storage

export { app, auth, db, storage };
