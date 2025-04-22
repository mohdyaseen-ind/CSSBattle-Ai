// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBiClEihrVTRodtZYr-0qwwvHhV1Fjk6MY",
  authDomain: "ui-throne.firebaseapp.com",
  projectId: "ui-throne",
  appId: "1:774683378386:web:5383c27c336ecacbd7630b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };