import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeQ1lIqi-A37DYBdTd-CURloRZZ572Acc",
  authDomain: "nehemia-allen-realtor.firebaseapp.com",
  projectId: "nehemia-allen-realtor",
  storageBucket: "nehemia-allen-realtor.appspot.com",
  messagingSenderId: "1064732233397",
  appId: "1:1064732233397:web:016fd97d946c85fcea78fc",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
