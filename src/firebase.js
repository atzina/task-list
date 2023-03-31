import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBwsXKqVfTn-gKaTYKtqmuAlomeF2mQrfQ",
    authDomain: "task-list-react-4801b.firebaseapp.com",
    projectId: "task-list-react-4801b",
    storageBucket: "task-list-react-4801b.appspot.com",
    messagingSenderId: "156382095605",
    appId: "1:156382095605:web:c8b1a323ff9e2bacd53dbc"
  };
  
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);