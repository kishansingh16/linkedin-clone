import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC9fFytQbPftkWQWXG3lCWlp3J2_VGzuAw",
    authDomain: "linkedin-clone-ed786.firebaseapp.com",
    projectId: "linkedin-clone-ed786",
    storageBucket: "linkedin-clone-ed786.appspot.com",
    messagingSenderId: "715071557519",
    appId: "1:715071557519:web:facf521f350d7af98145fa",
    measurementId: "G-T56W3JVW6S"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth}; 