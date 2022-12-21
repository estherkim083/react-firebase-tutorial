import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvqS-dh2q-Ojst6zaLCKi1sBNjM5vdtZo",
  authDomain: "dojo-site-2003b.firebaseapp.com",
  projectId: "dojo-site-2003b",
  storageBucket: "dojo-site-2003b.appspot.com",
  messagingSenderId: "881538213945",
  appId: "1:881538213945:web:408cb2858cc15f0b3545e8",
};

//init firebase
initializeApp(firebaseConfig);

//init firestore
const db = getFirestore();
const auth = getAuth();
export { db, auth };
