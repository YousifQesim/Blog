import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider,GithubAuthProvider, FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFy8zXmDVog5qIIEa__tGEMGYqc3xmD4I",
  authDomain: "blog4kurd.firebaseapp.com",
  projectId: "blog4kurd",
  storageBucket: "blog4kurd.appspot.com",
  messagingSenderId: "24188912473",
  appId: "1:24188912473:web:cb0b7810e5aade28a34248",
  measurementId: "G-YPDXSQ5WJW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const GitHub_provider = new GithubAuthProvider();
export const facebook_provider = new FacebookAuthProvider();