import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDF2Eqwfj-p0z64it4tlxQYEGFjJvJNfZc",
  authDomain: "netflix-8eedb.firebaseapp.com",
  projectId: "netflix-8eedb",
  storageBucket: "netflix-8eedb.appspot.com",
  messagingSenderId: "190284245655",
  appId: "1:190284245655:web:a52d328ef3246fe27557d2",
  measurementId: "G-S02ZNSEDJS",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
