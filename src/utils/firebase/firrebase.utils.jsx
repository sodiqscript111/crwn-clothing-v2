import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { Await } from "react-router-dom";
const firebaseConfig = {
  apiKey: "AIzaSyCjiOmegudDnuEfwJxjzpUkvcACITvwd6k",
  authDomain: "crwn-clothings-db-4bf91.firebaseapp.com",
  projectId: "crwn-clothings-db-4bf91",
  storageBucket: "crwn-clothings-db-4bf91.appspot.com",
  messagingSenderId: "98627515227",
  appId: "1:98627515227:web:cfd79b8bec70ce48dbe07e",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocsFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "user", userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log(`error creating the user`, error.message);
    }
  }
  return userDocRef;
};
