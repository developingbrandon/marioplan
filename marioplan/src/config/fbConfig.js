import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC4SUosvK_gTlH1Ya74iNZXw9K-4MXf-g8",
    authDomain: "brandon-h-marioplan.firebaseapp.com",
    databaseURL: "https://brandon-h-marioplan.firebaseio.com",
    projectId: "brandon-h-marioplan",
    storageBucket: "brandon-h-marioplan.appspot.com",
    messagingSenderId: "270597340789",
    appId: "1:270597340789:web:337f68bbc0b7ee099ac23c",
    measurementId: "G-851N2RQED6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;