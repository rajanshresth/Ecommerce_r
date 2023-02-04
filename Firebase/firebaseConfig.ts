// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN4OC3JYxuYCc-wFtPudNhg9KWaj3byrM",
  authDomain: "todoggle-4f9e0.firebaseapp.com",
  projectId: "todoggle-4f9e0",
  storageBucket: "todoggle-4f9e0.appspot.com",
  messagingSenderId: "829736390512",
  appId: "1:829736390512:web:504267313c837bd95089b5",
  measurementId: "G-3VY06G8BEQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);