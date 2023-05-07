// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDU8K8cKGykYXrd4QfXuvoiiCVzGi-7EQc",
    authDomain: "immortal-yoga.firebaseapp.com",
    projectId: "immortal-yoga",
    storageBucket: "immortal-yoga.appspot.com",
    messagingSenderId: "1071414917696",
    appId: "1:1071414917696:web:f2d6f515450e9041e33da5",
    databaseURL: "https://immortal-yoga-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)