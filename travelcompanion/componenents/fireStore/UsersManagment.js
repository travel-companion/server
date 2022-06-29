import React,{useEffect,useState} from 'react'
import { collection, query, where, doc, getDoc,getDocs } from "firebase/firestore";

import { db } from '../../firebase/initFirebase';
function UsersManagment() {
    const [users,setUsers]=useState([]);
    
    useEffect(()=>{
        getAll()
    },[])

    const getOne = async () => {
        try {
            const docRef = doc(db, "users","WtyPseuSNBr240jePTR2");
            getDoc(docRef).then(res => console.log(res))
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
    const getAll = async () => {
        try {
            const q = query(collection(db, "users"));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setUsers([...users,{id:doc.id,data:doc.data()}])
            });
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            {console.log(users)}
            <button onClick={getOne}>getOne</button>
            <button onClick={getAll}>getAll</button>

        </div>
    )
}

export default UsersManagment