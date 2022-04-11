// Import the functions you need from the SDKs you need
let firebase = require('firebase');
// Required for side-effects
require("firebase/firestore");

let firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDMPoMYT288jar4q-_rTH9UDKRKtVV5fJE",
  authDomain: "myweb-inbox.firebaseapp.com",
  projectId: "myweb-inbox",
  storageBucket: "myweb-inbox.appspot.com",
  messagingSenderId: "654441560676",
  appId: "1:654441560676:web:70ae864b1d771c06193d71",
  measurementId: "G-LVVDH6DF2B"
});

let db = firebaseApp.firestore();

module.exports = { db }

