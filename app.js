import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlUwtRiZ0dEw881_PV6JK3nFeKF2gwAMI",
  authDomain: "sgp-social.firebaseapp.com",
  projectId: "sgp-social",
  storageBucket: "sgp-social.firebasestorage.app",
  messagingSenderId: "886036235471",
  appId: "1:886036235471:web:4bc1421cdc95da504ae3ba"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Splash Screen Transition Logic
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('splash').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('splash').style.display = 'none';
            document.getElementById('app').style.display = 'block';
        }, 500);
    }, 2000);
});

// Authentication Guard
onAuthStateChanged(auth, (user) => {
    if (!user) {
        console.log("Redirecting to login...");
        // Logic to show login screen overlay goes here
    }
});
