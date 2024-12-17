// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAVOpKDN7TI3ObFQiapYrVVpLd_9vMAmlA",
  authDomain: "react-quiz-32a90.firebaseapp.com",
  projectId: "react-quiz-32a90",
  storageBucket: "react-quiz-32a90.appspot.com",
  messagingSenderId: "636448735297",
  appId: "1:636448735297:web:7ec2fa58a446bc3d48c6c0",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);