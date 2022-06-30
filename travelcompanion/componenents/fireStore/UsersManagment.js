import React, { useEffect, useState } from 'react'
import { collection, query, doc, updateDoc, getDocs } from "firebase/firestore";

import { db } from '../../firebase/initFirebase';
function UsersManagment() {
    const [users, setUsers] = useState([]);
    const [update,setUpdate]=useState(false)
    useEffect(() => {
        getAll();
    }, [update])


    const getAll = async () => {
        try {

            const q = query(collection(db, "users"));
            const querySnapshot = await getDocs(q);
            var arr = []
            querySnapshot.forEach((doc) => {
                    arr.push({ data: doc.data(), id: doc.id })
                setUsers(arr);
            });
        } catch (error) {
            console.log(error);
        }
    }


    const neutral=(id)=>{
        const user = doc(db, 'users', id);
        updateDoc(user, { state: "neutral" });
        setUpdate(!update)
    }
    const ban=(id)=>{
        const user = doc(db, 'users', id);
        updateDoc(user, { state: "banned" });
        setUpdate(!update)
    }
    const mute=(id)=>{
        const user = doc(db, 'users', id);
        updateDoc(user, { state: "muted" });
        setUpdate(!update)
    }



    return (
        <div>
            <table style={{ border: 'solid 1px black' }}>
                <thead>
                    <tr> 
                            <th
                                style={{
                                    borderBottom: 'solid 3px red',
                                    color: 'black',
                                }}
                            >
                                id
                            </th>
                            <th
                                style={{
                                    borderBottom: 'solid 3px red',
                                    color: 'black',
                                }}
                            >
                                name
                            </th>
                            <th
                                style={{
                                    borderBottom: 'solid 3px red',
                                    color: 'black',
                                }}
                            >
                                role
                            </th>
                            <th
                                style={{
                                    borderBottom: 'solid 3px red',
                                    color: 'black',
                                }}
                            >
                                state
                            </th>
                     </tr>
                </thead>
                <tbody>
                   {users.map((e,i)=>{
                    return(
                        <tr key={i}> 
                        <td
                            style={{
                                padding: '10px',
                                border: 'solid 1px gray',
                            }}
                        >
                            {e.id}
                        </td>
                        <td
                            style={{
                                padding: '10px',
                                border: 'solid 1px gray',
                            }}
                        >
                            {e.data.userName}
                        </td>
                        <td
                            style={{
                                padding: '10px',
                                border: 'solid 1px gray',
                            }}
                        >
                            {e.data.role}
                        </td>
                        <td
                            style={{
                                padding: '10px',
                                border: 'solid 1px gray',
                            }}
                        >
                            {e.data.state}
                        </td>
                        <td
                            style={{
                                padding: '10px',
                                border: 'solid 1px gray',
                            }}
                        >
                            {!(e.data.state==="banned")?
                            <button onClick={()=>{ban(e.id)}}>ban</button>:
                            <button onClick={()=>{neutral(e.id)}}>deban</button>} 
                            {!(e.data.state==="muted")?
                            <button onClick={()=>{mute(e.id)}}>mute</button>:
                            <button onClick={()=>{neutral(e.id)}}>demute</button>}

                        </td>
                    </tr>
                    )
                   })}
                </tbody>
            </table>
        </div>
    )
}

export default UsersManagment