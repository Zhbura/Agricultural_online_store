// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDihbtg4SlaRhtFckV9N36we9rlJPQQ84g",
    authDomain: "agricultural-online-store.firebaseapp.com",
    projectId: "agricultural-online-store",
    storageBucket: "agricultural-online-store.appspot.com",
    messagingSenderId: "973782533664",
    appId: "1:973782533664:web:999502a147af70be5b9e45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);
export const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);
export const logOut = () => signOut(auth);