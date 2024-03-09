import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore' 

const firebaseConfig = {
  apiKey: "AIzaSyDawKhF14c2FUV2m-uAOUomz9P0Gg5R3Io",
  authDomain: "react-portfolio-dashboar-9bf33.firebaseapp.com",
  projectId: "react-portfolio-dashboar-9bf33",
  storageBucket: "react-portfolio-dashboar-9bf33.appspot.com",
  messagingSenderId: "342436249325",
  appId: "1:342436249325:web:7288b931cc34259c7756e4"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);