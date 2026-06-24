import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Your Firebase Config (As provided)
const firebaseConfig = { /* ... */ };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// 1. Logic to create a post
window.publishPost = async () => {
    const text = document.getElementById("postContent").value;
    await addDoc(collection(db, "posts"), { text, createdAt: new Date() });
};

// 2. Logic to display the feed in real-time
const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
onSnapshot(q, (snapshot) => {
    const container = document.getElementById("feed-container");
    container.innerHTML = ""; // Clear current view
    snapshot.forEach((doc) => {
        container.innerHTML += `<div class="post">${doc.data().text}</div>`;
    });
});
