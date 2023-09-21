// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgYa7YFJWYn92PiN566Kyr90QRhW5lAFw",
  authDomain: "best-sites-50eb0.firebaseapp.com",
  projectId: "best-sites-50eb0",
  storageBucket: "best-sites-50eb0.appspot.com",
  messagingSenderId: "643456966777",
  appId: "1:643456966777:web:626d13013636e0c4f3b4a8",
  measurementId: "G-HQYZFSE40X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;