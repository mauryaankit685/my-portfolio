import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBwUFdqfOO65KYve6QGsy694bhIdof5ZMI",
    authDomain: "my-portfolio-d2b90.firebaseapp.com",
    projectId: "my-portfolio-d2b90",
    storageBucket: "my-portfolio-d2b90.firebasestorage.app",
    messagingSenderId: "340336443977",
    appId: "1:340336443977:web:8ae64d790ac35d54f33598",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
