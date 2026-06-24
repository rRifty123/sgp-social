import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBlUwtRiZ0dEw881_PV6JK3nFeKF2gwAMI",
  authDomain: "sgp-social.firebaseapp.com",
  projectId: "sgp-social",
  storageBucket: "sgp-social.firebasestorage.app",
  messagingSenderId: "886036235471",
  appId: "1:886036235471:web:4bc1421cdc95da504ae3ba"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Ensure auth is initialized with the app instance

window.handleAuth = async (isSignup) => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    try {
        if (isSignup) {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Account created!");
        } else {
            await signInWithEmailAndPassword(auth, email, password);
            alert("Logged in!");
        }
        // Redirect or refresh UI here
        location.reload(); 
    } catch (error) {
        alert("Error: " + error.message);
    }
};
