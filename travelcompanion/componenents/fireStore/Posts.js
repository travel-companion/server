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
                var user = await getUser(doc.data().user.id)
                arr.push({ data: doc.data(), id: doc.id, user: user })
                setPosts(arr);
            });
        } catch (error) {
            console.log(error);
        }
    }

    const del = async (id, localUser,userId) => {
        await deleteDoc(doc(db, "posts", id))
        const refDoc = doc(db, "users",userId);
        var x=localUser.filter((e)=>{
            return e!==id
        })
        await updateDoc(refDoc, {
            posts: x
        });

        setUpdate(!update)
    }
    const getUser = async (idUser) => {
        const ref = doc(db, "users", idUser);
        const docSnap = await getDoc(ref);
        const user = docSnap.data();
        return user
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
                            content
                        </th>
                        <th
                            style={{
                                borderBottom: 'solid 3px red',
                                color: 'black',
                            }}
                        >
                            user
                        </th>

                    </tr>
                </thead>
                <tbody>
                    {posts.map((e, i) => {
                        return (
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
                                    {e.data.content}
                                </td>
                                <td
                                    style={{
                                        padding: '10px',
                                        border: 'solid 1px gray',
                                    }}
                                >   
                                    {e.user.userName}
                                    
                                </td>

                                <td
                                    style={{
                                        padding: '10px',
                                        border: 'solid 1px gray',
                                    }}
                                >
                                    <button onClick={() => { del(e.id,e.user.posts,e.data.user.id) }}>delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Posts