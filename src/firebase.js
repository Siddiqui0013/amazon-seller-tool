import {initializeApp} from "firebase/app"
import { getFirestore } from "firebase/firestore";
import {getAuth,signOut,onAuthStateChanged, browserLocalPersistence, setPersistence } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBqn9spXCzvJIRaiIX-8N4MNPQaalBXSWE",
    authDomain: "seller-tool-d63f6.firebaseapp.com",
    projectId: "seller-tool-d63f6",
    storageBucket: "seller-tool-d63f6.appspot.com",
    messagingSenderId: "197601742841",
    appId: "1:197601742841:web:aaa898dda1e4855c4c3728",
    measurementId: "G-LBWTB8XYM9"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)

//   const user = auth.currentUser;
// if (user) {
//   chrome.storage.local.set({
//     'userId': user.uid,
//     'userEmail': user.email,
//     'isAuthenticated': true
//   });
// }

const user = auth.currentUser;
if (user) {
  window.postMessage({
    type: 'SELLER_TOOL_AUTH',
    data: {
      userId: user.uid,
      userEmail: user.email,
      isAuthenticated: true
    }
  }, '*');
}

  setPersistence(auth, browserLocalPersistence).catch((error) => {
    console.log(error)
  })

  export {auth, signOut, onAuthStateChanged}
  export const db = getFirestore(app)  