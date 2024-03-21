
import { initializeApp } from "firebase/app";

import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARrvOS2AtsWQwG5i4SBrR7x6jkrMEr-cU",
  authDomain: "redcomiit.firebaseapp.com",
  projectId: "redcomiit",
  storageBucket: "redcomiit.appspot.com",
  messagingSenderId: "433790376467",
  appId: "1:433790376467:web:6e8136fca8d605be19bde6",
  measurementId: "G-4HMW13E5J7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider()
export {auth, provider};
