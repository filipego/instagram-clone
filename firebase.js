// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-OBYV_J-Usa3FWliGefaVpYEgCMnwcn4",
  authDomain: "insta-clone-6f922.firebaseapp.com",
  projectId: "insta-clone-6f922",
  storageBucket: "insta-clone-6f922.appspot.com",
  messagingSenderId: "328627713670",
  appId: "1:328627713670:web:0001e9c2a981d89d0ac307"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app, db, storage};