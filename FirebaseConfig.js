import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database'

const firebaseConfig =  {
    apiKey: "AIzaSyDZ1KECDeiErKk5vmERDdbd02prSa9As3M",
    authDomain: "xplor-f95de.firebaseapp.com",
    databaseURL:"https://xplor-f95de-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "xplor-f95de",
    storageBucket: "xplor-f95de.appspot.com",
    messagingSenderId: "117798878131",
    appId: "1:117798878131:web:36cff0a7365e9ddda369c6"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {firebase};