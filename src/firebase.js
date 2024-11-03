// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAd5SQiFe5RRm954rTLRnEPPGEYznSMSBo",
    authDomain: "shintaikan-6b670.firebaseapp.com",
    databaseURL: "https://shintaikan-6b670.firebaseio.com",
    projectId: "shintaikan-6b670",
    storageBucket: "shintaikan-6b670.appspot.com",
    messagingSenderId: "929946590509",
    appId: "1:929946590509:web:7107bf53389ab56dc507a4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
