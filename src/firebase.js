import firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';



// Your web app's Firebase configuration
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAhiwx2YOruigA42KlO4lVf5vggRshHsYE",
    authDomain: "dhriti-firegram.firebaseapp.com",
    projectId: "dhriti-firegram",
    storageBucket: "dhriti-firegram.appspot.com",
    messagingSenderId: "188936336501",
    appId: "1:188936336501:web:787478661ed1ff5f73b43c"
  });
  
  const db = firebaseApp.firestore();
  const storage = firebaseApp.storage();
  

  export { db, storage };