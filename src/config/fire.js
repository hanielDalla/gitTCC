import firebase from 'firebase'
import Rebase from 're-base'

var config = {
  apiKey: "AIzaSyBW4RIeExI2tyNgZ77GsGLuqQxH-s7B9rA",
  authDomain: "novapp-42bdd.firebaseapp.com",
  databaseURL: "https://novapp-42bdd.firebaseio.com",
  projectId: "novapp-42bdd",
  storageBucket: "novapp-42bdd.appspot.com",
  messagingSenderId: "784852564716"
};
const fire = firebase.initializeApp(config);

const base = Rebase.createClass( fire.database() )

// const database = firebase.database().ref()

// const addDatabase = ( pasta, objeto ) => {
//   database.child( pasta ).push( objeto )
// }

export {base, fire};