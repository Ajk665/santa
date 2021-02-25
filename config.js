import firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyAo82TQXa-q86VKvkoHVcGRjrIAmjUpgss",
    authDomain: "book-santa-8b4f2.firebaseapp.com",
    projectId: "book-santa-8b4f2",
    storageBucket: "book-santa-8b4f2.appspot.com",
    messagingSenderId: "419991584629",
    appId: "1:419991584629:web:903834057b60ed7a759d3c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()