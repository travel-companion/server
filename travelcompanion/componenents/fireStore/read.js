import React from 'react'
import { doc, getDoc } from "firebase/firestore"; 
import { db } from '../../firebase/initFirebase';
function ReadFromcloudFirestore() {
     const getData= async ()=>{
        try {
            const docRef = doc(db, "users","ovFa4ZVsnBgCi4NS0HCF");
            getDoc(docRef).then(res=>console.log(res))
            const docSnap = await getDoc(docRef);  
            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
              } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
              }            
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div>
        <button onClick={getData}>get</button>
    </div>
  )
}

export default ReadFromcloudFirestore