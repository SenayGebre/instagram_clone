import firebase from "firebase/compat/app";

const firebaseConfig = {
    apiKey: "AIzaSyBa0SCgZfqlVRR1rKIU7t-3DcBxKdQ1fqg",
    authDomain: "instagram-dev-706d0.firebaseapp.com",
    projectId: "instagram-dev-706d0",
    storageBucket: "instagram-dev-706d0.appspot.com",
    messagingSenderId: "801572028538",
    appId: "1:801572028538:web:b86bc24060f88cb4867bc3"
  };


  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export {firebase}