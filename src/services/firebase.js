// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
// import { getDatabase, ref } from "firebase/database";
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

// export const db = getDatabase(app);

// export const guestNameRef = ref(db, 'guest/name');
// export const guestSurnameRef = ref(db, 'guest/surname');
// export const guestPhoneRef = ref(db, 'guest/phone');
// export const guestEmailRef = ref(db, 'guest/email');
// export const guestCommentRef = ref(db, 'guest/comment');

// export const orderNameRef = ref(db, 'order/name');
// export const orderSurnameRef = ref(db, 'order/surname');
// export const orderPhoneRef = ref(db, 'order/phone');
// export const orderEmailRef = ref(db, 'order/email');
// export const orderCommentRef = ref(db, 'order/comment');
// export const orderPostcodeRef = ref(db, 'order/postcode');
// export const orderRegionRef = ref(db, 'order/region');
// export const orderCityRef = ref(db, 'order/city');
// export const orderDepartmentRef = ref(db, 'order/department');

// export const registrationNameRef = ref(db, 'registration/name');
// export const registrationSurnameRef = ref(db, 'registration/surname');
// export const registrationPhoneRef = ref(db, 'registration/phone');
// export const registrationEmailRef = ref(db, 'registration/email');



