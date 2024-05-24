// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyCl4hwX_-oMso6mwPqLoTwYlZjpljdpArk",
  authDomain: "insta-clone-a6801.firebaseapp.com",
  projectId: "insta-clone-a6801",
  storageBucket: "insta-clone-a6801.appspot.com",
  messagingSenderId: "685510894365",
  appId: "1:685510894365:web:838c5564cff266b990f7f4",
  measurementId: "G-F1F8KX07V0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, auth, firestore, storage};