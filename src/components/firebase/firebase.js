// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyBwUFdqfOO65KYve6QGsy694bhIdof5ZMI",
//     authDomain: "my-portfolio-d2b90.firebaseapp.com",
//     projectId: "my-portfolio-d2b90",
//     storageBucket: "my-portfolio-d2b90.firebasestorage.app",
//     messagingSenderId: "340336443977",
//     appId: "1:340336443977:web:8ae64d790ac35d54f33598",
//     measurementId: "G-L45E2JCRZC"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAnalytics(app);



// src/firebase.js
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

// ✅ initialize app & get auth
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
