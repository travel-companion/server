import { initializeApp } from 'firebase/app';
 import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
 import {auth} from 'firebase/auth'
import 'firebase/storage'
 
 const clientCredentials={
    apiKey:process.env.NEXT_PUBLIC_FIREBASE_API_KEY ,
    authDomain:process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ,
    projectId:process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ,
    storageBucket:process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ,
    messagingSenderId:process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ,
    appId:process.env.NEXT_PUBLIC_FIREBASE_APP_ID
 }
 const app = initializeApp( clientCredentials);
 export const db = getFirestore(app);

 // Get a list of cities from your database
 async function getUsers(db) {
   const usersCol = collection(db, 'users');
   const usersSnapshot = await getDocs(usersCol);
   const users = usersSnapshot.docs.map(doc => doc.data());
   return users;
 }

 