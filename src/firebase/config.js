import { getApps, getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBa0SCgZfqlVRR1rKIU7t-3DcBxKdQ1fqg",
    authDomain: "instagram-dev-706d0.firebaseapp.com",
    projectId: "instagram-dev-706d0",
    storageBucket: "instagram-dev-706d0.appspot.com",
    messagingSenderId: "801572028538",
    appId: "1:801572028538:web:b86bc24060f88cb4867bc3"
  };


    const firebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    const firebaseAuth = getAuth(firebaseApp);
    const firebaseDB = getDatabase(firebaseApp);
    const firestoreDB = getFirestore(firebaseApp);
    

export {firebaseApp, firebaseAuth, firebaseDB, firestoreDB}