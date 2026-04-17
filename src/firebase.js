import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Tambahkan import untuk Auth dan Firestore di bawah ini
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTRiItnnq8T8gc-FA5kkfnInocJep4bvU",
  authDomain: "acep-7e0c9.firebaseapp.com",
  projectId: "acep-7e0c9",
  storageBucket: "acep-7e0c9.firebasestorage.app",
  messagingSenderId: "1015911624032",
  appId: "1:1015911624032:web:a91f047022faadcf20c205",
  measurementId: "G-LNH1MF0DYD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// --- TAMBAHKAN KODE DI BAWAH INI ---

// 1. Ekspor variabel auth dan db agar bisa dipakai di ChatRoom.jsx
export const auth = getAuth(app);
export const db = getFirestore(app);

// 2. Fungsi Login dengan Google
export const loginWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

// 3. Fungsi Logout
export const logout = () => signOut(auth);