// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {app} from "./firebaseConfig.js"
const firebaseConfig = {
  apiKey: "AIzaSyB9ZgyVQSOTXhvriLApFx5stVLtue2NODM",
  authDomain: "travel-companion-32ea8.firebaseapp.com",
  projectId: "travel-companion-32ea8",
  storageBucket: "travel-companion-32ea8.appspot.com",
  messagingSenderId: "1045381508770",
  appId: "1:1045381508770:web:8d4c19021b7cadfd0d31fb",
  measurementId: "G-6ZHM6D1S32"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);