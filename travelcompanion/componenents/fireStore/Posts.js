import React, { useEffect, useState } from 'react'
import { collection, query, doc, updateDoc, getDocs, deleteDoc, getDoc } from "firebase/firestore";

import { db } from '../../firebase/initFirebase';
function Posts() {
    const [posts, setPosts] = useState([]);


    const [update, setUpdate] = useState(false)
    useEffect(() => {
        getAll();
    }, [update])


    const getAll = async () => {
        try {

            const q = query(collection(db, "posts"));
            const querySnapshot = await getDocs(q);
            var arr = []
            querySnapshot.forEach(async (doc) => {
                var user = await getUser(doc.data().user)
                arr.push({ data: doc.data(), id: doc.data().idUser, user: user })
                setPosts(arr);
            });
        } catch (error) {
            console.log(error);
        }
    }

    const del = async (id) => {
        await deleteDoc(doc(db, "posts", id))
        // const refDoc = doc(db, "UserData",userId);
        // var x=localUser.filter((e)=>{
        //     return e!==id
        // })
        // await updateDoc(refDoc, {
        //     posts: x
        // });

        setUpdate(!update)
    }
    const getUser = async (idUser) => {
        const ref = doc(db, "UserData", idUser);
        const docSnap = await getDoc(ref);
        const user = docSnap.data();
        return user
    }


    return (
        <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden"></div>
       
            <table class="table-auto min-w-full center text-center absolute inset-x-0 top-30 left-20 h-16">
                <thead  class="border-b bg-gray-800 ">
                    <tr  scope="col" class="text-sm font-medium text-gray-900  px-4 py-4 text-left  ">
                        <th
                            scope="col" class="text-sm font-medium text-center text-white px-6 py-4 border-separate border-spacing-2 border border-slate-500 "
                        >
                            User ID
                        </th>
                        <th
                             scope="col" class="text-sm font-medium  text-center text-white px-4 py-4 border-separate border-spacing-2 border  "
                        >
                            Content
                        </th>
                        <th
                            scope="col" class="text-sm font-medium text-center text-white px-4 py-4 border-separate  border border-slate-500"
                        >
                            Username
                        </th>

                    </tr>
                </thead>
                <tbody>
                    {posts.map((e, i) => {
                        return (
                            <tr key={i}>
                                <td
                                    style={{
                                        padding: '4px',
                                        border: 'solid 1px gray',
                                    }}
                                >
                                    {e.id}
                                </td>
                                <td
                                    style={{
                                        padding: '4px',
                                        border: 'solid 1px gray',
                                    }}
                                >
                                    {e.data.content}
                                </td>
                                <td
                                    style={{
                                        padding: '4px',
                                        border: 'solid 1px gray',
                                    }}
                                >   
                                    {e.data.user}
                                    
                                </td>

                                <td
                                  
                                >
                                    <button  className="text-white px-10 py-2 rounded bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 disabled:opacity-50" onClick={() => { del(e.id,e.data.user.id) }}>delete</button>
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

export default Posts