import React, { useState, useEffect } from 'react'
import { collection, query, doc, getDocs, updateDoc, arrayUnion } from "firebase/firestore";
import { database, db } from '../../firebase/initFirebase';
import { getDatabase, ref, set } from "firebase/database";

function ChatRoom() {

    const [update, setUpdate] = useState(false);
    const [allLine, setAllLine] = useState([]);
    const [time, setTime] = useState("");
    const [line, setLine] = useState({});
    const [times, setTimes] = useState([])


    useEffect(() => {
        getAll()
    }, [update])
    const dynamiqueUpdate = () => {
        setUpdate(!update)
    }


    

    const getAll = async () => {
        try {
            const q = query(collection(db, "lines"));
            const querySnapshot = await getDocs(q);
            var arr = []
            querySnapshot.forEach((doc) => {
                arr.push({ data: doc.data(), id: doc.id })
                setAllLine(arr);
            });
        } catch (error) {
            console.log(error);
        }
    }

    const sendData = async () => {
        try {
                times.map((e)=>{
                    const db = getDatabase();
                set(ref(db, 'chats/' + line.name+e), {
                    time: e,
                    line: line.id
                });
                })
                
              
        } catch (error) {
            console.log(error);
        }

        times.forEach(element => {
            updateDoc(doc(db, "lines", line.id), {
                times: arrayUnion({ t:element })
            });
        });
    }
    const addToTimes = () => {
        if (!times.includes(time)) {
            setTimes([...times, time])
            dynamiqueUpdate()
        }

    }
    return (
        <div>
            <input time="text" placeholder='time' onChange={(e) => { setTime(e.target.value) }} />
            <button onClick={addToTimes}>add</button><br />
            <select onChange={(e) => setLine(JSON.parse(e.target.value))} name="type" id="depart">
                <option value="test">choose line</option>
                {
                    allLine.map((e, i) => {
                        return <option value={JSON.stringify({ id: e.id, name: e.data["ref"] })} key={i}>{e.data.ref}
                        </option>
                    })
                }
            </select>
            {times.map((e, i) => { return <p key={i}>{e}</p> })}
            <br />
            <button onClick={sendData}>send</button>
        </div>
    )
}

export default ChatRoom