import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBdkAiCjyT07SppOblcqrI29RNTjHGWRb8",
    authDomain: "todo-list-app-f6d5a.firebaseapp.com",
    projectId: "todo-list-app-f6d5a",
    storageBucket: "todo-list-app-f6d5a.appspot.com",
    messagingSenderId: "138601045898",
    appId: "1:138601045898:web:6d165b39457095d0fdb273"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);