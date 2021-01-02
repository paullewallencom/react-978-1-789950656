import * as firebase from 'firebase'
var config = {
    apiKey: "AIzaSyAWZObGQDfGbplDsJ0QXZGfZ22Ph9vlkgc",
    authDomain: "photowall-45333.firebaseapp.com",
    databaseURL: "https://photowall-45333.firebaseio.com",
    projectId: "photowall-45333",
    storageBucket: "photowall-45333.appspot.com",
    messagingSenderId: "586411564955"
  }
  
  firebase.initializeApp(config)

  const database = firebase.database()

  export {database}