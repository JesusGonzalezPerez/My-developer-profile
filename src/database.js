import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBxDhjWWp5WO_bv057CTEYveghYXNdvhbI",
    authDomain: "jesusgonzalezperez-curriculum.firebaseapp.com",
    projectId: "jesusgonzalezperez-curriculum",
    storageBucket: "jesusgonzalezperez-curriculum.appspot.com",
    messagingSenderId: "230261170013",
    appId: "1:230261170013:web:e95468c78c576187abd2b4",
    measurementId: "G-LWLX9C7ELS"
  };


// Get a Firestore instance
export const db = firebase
    .initializeApp(firebaseConfig)
    .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true },{merge: true})

export default{
    auth: firebase.auth()
}
