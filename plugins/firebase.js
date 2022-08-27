// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjZy2AzR1aPX7Nc_LhTz4SOI11pMQ2IRI",
  authDomain: "sopet-official.firebaseapp.com",
  databaseURL: "https://sopet-official-default-rtdb.firebaseio.com",
  projectId: "sopet-official",
  storageBucket: "sopet-official.appspot.com",
  messagingSenderId: "158799004857",
  appId: "1:158799004857:web:1af82a50da35a7e9fa0768",
  measurementId: "G-C0TS2SB19P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);