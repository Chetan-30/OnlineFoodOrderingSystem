import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


export const firebaseConfig = {

    apiKey: "AIzaSyA_LKOefwlZOIFvSyseSgz_tdhJyiR4-9w",
  
    authDomain: "foodordering-f2021.firebaseapp.com",
  
    projectId: "foodordering-f2021",
  
    storageBucket: "foodordering-f2021.appspot.com",
  
    messagingSenderId: "1012382718537",
  
    appId: "1:1012382718537:web:253a0e8d2ee57d6b807d98",
  
    measurementId: "G-JV00TW8YX9"
  
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
  