import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCIXdehgDW8Ly2I92nCy8OX7ynFoYnuPGU",
  authDomain: "discord-70c53.firebaseapp.com",
  databaseURL: "https://discord-70c53.firebaseio.com",
  projectId: "discord-70c53",
  storageBucket: "discord-70c53.appspot.com",
  messagingSenderId: "796879730578",
  appId: "1:796879730578:web:ecf4c7d9aebfb67227f34b"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db;
