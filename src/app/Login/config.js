// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAimVWBcLw6s-7b_e-D5JvO6lib1eUsDnw",
  authDomain: "ecommerce-2c668.firebaseapp.com",
  projectId: "ecommerce-2c668",
  storageBucket: "ecommerce-2c668.appspot.com",
  messagingSenderId: "167384574727",
  appId: "1:167384574727:web:d562e343231bffee38b3a2",
  measurementId: "G-BTEL170337"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
export {auth,provider};