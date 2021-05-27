import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCMrzYpS9Ce1A7Sb2oubtRQ9JQcP9loeRo",
  authDomain: "socialmedia-52f5b.firebaseapp.com",
  projectId: "socialmedia-52f5b",
  storageBucket: "socialmedia-52f5b.appspot.com",
  messagingSenderId: "581393537272",
  appId: "1:581393537272:web:510f2b9371907107b1830d",
  measurementId: "G-KT77BS5LCX",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
