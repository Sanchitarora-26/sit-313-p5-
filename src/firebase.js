

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIySnm8EZl2Y2cwHCI333CBEM4uDL6F_Q",
  authDomain: "dev-deakin-p4-654ff.firebaseapp.com",
  projectId: "dev-deakin-p4-654ff",
  storageBucket: "dev-deakin-p4-654ff.firebasestorage.app",
  messagingSenderId: "123248250267",
  appId: "1:123248250267:web:fe612f42f65ad894c1e53e"
};

// Initialise Firebase
const app = initializeApp(firebaseConfig);

// Initialise Firebase Authentication
export const auth = getAuth(app);

// Initialise Cloud Firestore
export const db = getFirestore(app);

export default app;
