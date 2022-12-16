import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApZj8f9esg5Yn8yHAc7CcW9xMzOHIEvWY",
  authDomain: "mymoney-tut.firebaseapp.com",
  projectId: "mymoney-tut",
  storageBucket: "mymoney-tut.appspot.com",
  messagingSenderId: "1076286975086",
  appId: "1:1076286975086:web:7e102340ba1ae7f5e10a7f",
};

// firebase 초기화
firebase.initializeApp(firebaseConfig);

// service 초기화
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
