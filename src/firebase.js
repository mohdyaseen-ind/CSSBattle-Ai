// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBiClEihrVTRodtZYr-0qwwvHhV1Fjk6MY",
  authDomain: "ui-throne.firebaseapp.com",
  projectId: "ui-throne",
  storageBucket: "ui-throne.firebasestorage.app",
  messagingSenderId: "774683378386",
  appId: "1:774683378386:web:5383c27c336ecacbd7630b",
  measurementId: "G-XLJ2YJK0MQ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, signInWithPopup, signOut, db };