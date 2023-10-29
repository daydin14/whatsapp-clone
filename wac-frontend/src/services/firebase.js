// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// import firebase from "firebase/app";
// import "firebase/auth";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD508qCMrDISvTN6Q_RSBl2_o-GVhOWiIM",
    authDomain: "whatsapp-clone-23a3d.firebaseapp.com",
    projectId: "whatsapp-clone-23a3d",
    storageBucket: "whatsapp-clone-23a3d.appspot.com",
    messagingSenderId: "808140475450",
    appId: "1:808140475450:web:dd3b3e9b19f705cbf57903",
    measurementId: "G-9YLCS24RP7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const handleLoginWithGoogle = async () => {
    try {
        await signInWithPopup(auth, provider);
    } catch (error) {
        console.error(error);
    }
};

const handleGoogleLogout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error(error);
    }
}


export { auth, handleLoginWithGoogle, handleGoogleLogout };