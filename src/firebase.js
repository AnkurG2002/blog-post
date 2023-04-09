import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDlS0ujB7tofS7fRnYqLVR1e6osA3Iuybc",
  authDomain: "react-hooks-blog-bc84b.firebaseapp.com",
  projectId: "react-hooks-blog-bc84b",
  storageBucket: "react-hooks-blog-bc84b.appspot.com",
  messagingSenderId: "208083108",
  appId: "1:208083108:web:923e7ee86c9c37ac85ee31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);