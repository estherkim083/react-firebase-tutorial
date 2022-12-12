import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_Iakq2TkXGM5Rx7mScgJWk4j66P5wZRo",
  authDomain: "recipe-tutorial-b1cdc.firebaseapp.com",
  projectId: "recipe-tutorial-b1cdc",
  storageBucket: "recipe-tutorial-b1cdc.appspot.com",
  messagingSenderId: "1090712028435",
  appId: "1:1090712028435:web:698357cabd183edc1b86e6",
  measurementId: "G-XNXS9Y9EP1",
};
// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
