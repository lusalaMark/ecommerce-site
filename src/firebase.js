import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDM2it-cdR-JB4J8brytEgDVF3v59OF7A4",
  authDomain: "ecommerce-site-a8d87.firebaseapp.com",
  projectId: "ecommerce-site-a8d87",
  storageBucket: "ecommerce-site-a8d87.appspot.com",
  messagingSenderId: "702977184549",
  appId: "1:702977184549:web:4721dfceff6990ea7800cc",
  measurementId: "G-6TSV8X6HKX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
