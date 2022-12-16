import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBvqS-dh2q-Ojst6zaLCKi1sBNjM5vdtZo",
  authDomain: "dojo-site-2003b.firebaseapp.com",
  projectId: "dojo-site-2003b",
  storageBucket: "dojo-site-2003b.appspot.com",
  messagingSenderId: "881538213945",
  appId: "1:881538213945:web:0cc3a55986b217c73545e8",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init Services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

//timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
