
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB5JEaz8aHiQSNqNEjzfHG6Yz2_GnfTQiw",
  authDomain: "blog-app-emc-bece8.firebaseapp.com",
  projectId: "blog-app-emc-bece8",
  storageBucket: "blog-app-emc-bece8.firebasestorage.app",
  messagingSenderId: "534893505382",
  appId: "1:534893505382:web:d8aa0f6fc48100a95076a7",
  measurementId: "G-D8B0C9VM43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export default auth