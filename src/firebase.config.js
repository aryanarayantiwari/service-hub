// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAcU1OhADwXL0x-sekT5PnXNKelhiwDNaU",
  authDomain: "service-hub-d27ae.firebaseapp.com",
  projectId: "service-hub-d27ae",
  storageBucket: "service-hub-d27ae.appspot.com",
  messagingSenderId: "250229531361",
  appId: "1:250229531361:web:254ec30d097fcee1fe4da0"
};

initializeApp(firebaseConfig);

export const db = getFirestore()