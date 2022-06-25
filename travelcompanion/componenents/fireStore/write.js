import React from 'react'
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../../firebase/initFirebase';
function WriteTocloudFirestore() {
     const sendData= async()=>{
        try {
            await setDoc(doc(db, "cities", "LA"), {
                name: "Los Angeles",
                state: "CA",
                country: "USA"
              });
              
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div>
        <button onClick={sendData}>send</button>
    </div>
  )
}

export default WriteTocloudFirestore