// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHcsR5s_8D1Whzd4026YqHWALtXbft-QA",
  authDomain: "passi-ae012.firebaseapp.com",
  projectId: "passi-ae012",
  storageBucket: "passi-ae012.appspot.com",
  messagingSenderId: "137334413189",
  appId: "1:137334413189:web:25535a6ec68dea5f49d6ec",
  measurementId: "G-0RGCVRLPFS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);