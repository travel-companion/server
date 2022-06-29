import { initializeApp } from 'firebase/app';
 import { getFirestore } from 'firebase/firestore/lite';
 import {getDatabase}from 'firebase/database'
 import {auth} from 'firebase/auth'
import 'firebase/storage'
 
 const clientCredentials={
    apiKey:process.env.NEXT_PUBLIC_FIREBASE_API_KEY ,
    authDomain:process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ,
    projectId:process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ,
    storageBucket:process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ,
    messagingSenderId:process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ,
    appId:process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    databaseURL: "https://travel-companion-a27a6-default-rtdb.europe-west1.firebasedatabase.app/",

 }
 const app = initializeApp( clientCredentials);
 export const db = getFirestore(app);

 // Get a list of cities from your database
 

// Initialize Firebase


// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);


 