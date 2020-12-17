import firebase from 'firebase'
const  firebaseConfig = {
    apiKey: "AIzaSyAUCV1IHQRpFxRcYLkCfvtepsedtR4yRhA",
    authDomain: "invoice-tracker-712f1.firebaseapp.com",
    projectId: "invoice-tracker-712f1",
    storageBucket: "invoice-tracker-712f1.appspot.com",
    messagingSenderId: "891426522805",
    appId: "1:891426522805:web:86cfd662e5b174d329e0fc",
    measurementId: "G-WYLZV48RMP"
  };
  // Initialize Firebase
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  export  {db};