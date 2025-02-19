// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDGfimunc8qhMxMzURgzgpLGhuI8rF-RP0",
    authDomain: "easyenglish-fd855.firebaseapp.com",
    projectId: "easyenglish-fd855",
    storageBucket: "easyenglish-fd855.firebasestorage.app",
    messagingSenderId: "328441701546",
    appId: "1:328441701546:web:e566f5bca73144ed399cd3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize services you want to use
const auth = getAuth(app); // For authentication
const db = getFirestore(app); // For Firestore
const storage = getStorage(app); // For Storage

// Export the services for use in your application
export { app, auth, db, storage };