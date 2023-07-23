import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: "e-chat-48870.firebaseapp.com",
  projectId: "e-chat-48870",
  storageBucket: "e-chat-48870.appspot.com",
  messagingSenderId: "732213117038",
  appId: "1:732213117038:web:b505875b50841a771fa67f",
  measurementId: "G-51JZKT28S9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, db, provider };
