import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database'

const firebaseConfig =  {
    apiKey: "AIzaSyBhSKe4XrWxODjmwJCU5AWgBKjDTY3BQT4",
    authDomain: "xplore-app-b7726.firebaseapp.com",
    databaseURL:'https://xplore-app-b7726-default-rtdb.firebaseio.com/',
    projectId: "xplore-app-b7726",
    storageBucket: "xplore-app-b7726.appspot.com",
    messagingSenderId: "852731419472",
    appId: "1:852731419472:web:76f7f54688574e044baa55"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {firebase};