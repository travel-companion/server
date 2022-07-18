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

            const q = query(collection(db, "UserData"));
            const querySnapshot = await getDocs(q);
            var arr = []
            querySnapshot.forEach((doc) => {
                    arr.push({ data: doc.data(), id: doc.data().uid })
                setUsers(arr);
            });
        } catch (error) {
            console.log(error);
        }
    }


    const neutral=(id)=>{
        const user = doc(db, 'UserData', id);
        updateDoc(user, { state: "neutral" });
        setUpdate(!update)
    }
    const ban=(id)=>{
        const user = doc(db, 'UserData', id);
        updateDoc(user, { state: "banned" });
        setUpdate(!update)
    }
    const mute=(id)=>{
        const user = doc(db, 'UserData', id);
        updateDoc(user, { state: "muted" });
        setUpdate(!update)
    }



    return (
        <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden"></div>
       
            <table   class="min-w-full text-center  absolute inset-x-0 top-30 left-20 h-16	 ">
                <thead   class="border-b bg-gray-800 ">
                    <tr scope="col" class="text-sm font-medium text-gray-900  px-6 py-4 text-left  " > 
                            <th
                                scope="col" class="text-sm font-medium text-center text-white px-6 py-4 border-separate border-spacing-2 border border-slate-500 "
                            >
                                User ID
                            </th>
                            <th
                                scope="col" class="text-sm font-medium text-center text-white px-6 py-4 border-separate border-spacing-2 border border-slate-500 "
                            >
                                Name
                            </th>
                            <th
                                scope="col" class="text-sm font-medium text-center text-white px-6 py-4 border-separate border-spacing-2 border border-slate-500"
                            >
                                Role
                            </th>
                            <th
                                scope="col" class="text-sm font-medium text-center text-white px-6 py-4 border-separate border-spacing-2 border border-slate-500"
                            >
                                State
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
                                border:"border-spacing-2",
                                padding: '10px',
                                border: 'solid 1px gray',
                            }}
                        >
                            {e.data.name}
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
                                border: 'solid 1px white',
                            }}
                        >
                            {!(e.data.state==="banned")?
                            <button  className="inline-block px-6 py-2 border-2 border-blue-600 space-x-6 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" onClick={()=>{ban(e.id)}}>ban</button>: 
                            <button className="inline-block px-6 py-2 border-2 border-yellow-500 text-yellow-500 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out " onClick={()=>{neutral(e.id)}}>deban</button>} 
                            {!(e.data.state==="muted")?
                            <button  class="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" onClick={()=>{mute(e.id)}}>mute</button>:
                            <button className="inline-block px-6 py-2 border-2 border-yellow-500 text-yellow-500 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" onClick={()=>{neutral(e.id)}}>demute</button>}

                        </td>
                    </tr>
                    )
                   })}
                </tbody>
            </table>
        </div>
        </div>
        </div>

    )
}

export default UsersManagment