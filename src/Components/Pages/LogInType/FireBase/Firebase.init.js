import { initializeApp } from "firebase/app";
import firebaseConfig from './Firebase.config';

// // Initialize Firebase
const initializeFirebase = () =>{
    initializeApp(firebaseConfig);
}


export default initializeFirebase;

