import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = { /* Your Config */ };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Authentication Functions
window.handleAuth = async (isSignUp) => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        if (isSignUp) {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Account created!");
        } else {
            await signInWithEmailAndPassword(auth, email, password);
            alert("Logged in!");
            document.getElementById("auth-section").style.display = "none";
            document.getElementById("main-content").style.display = "block";
        }
    } catch (error) {
        alert(error.message);
    }
};
