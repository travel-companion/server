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
            <input  className="border py-2 px-14 text-grey-darkest "time="text" placeholder='time' onChange={(e) => { setTime(e.target.value) }} />
            
            <button class="inline-block px-14 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg flex space-x-4focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out" onClick={addToTimes}>add</button><br />
            
            <select class="form-select appearance-none flex space-x-4
              bloc px-20 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat
               border border-solid border-gray-300 rounded transition ease-in-out m-0
            focus:text-blue-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
      onChange={(e) => setLine(JSON.parse(e.target.value))} name="type" id="depart"><br/>
                <option value="test">choose line</option>
                {
                    allLine.map((e, i) => {
                        return <option value={JSON.stringify({ id: e.id, name: e.data["ref"] })} key={i}>{e.data.ref}
                        </option>
                    })
                }
            </select>
            {times.map((e, i) => { return <p key={i}>{e}</p> })}
            <br/>
            <button class="inline-block px-14 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out" onClick={sendData}>send</button>
        </div>
    )
}

export default ChatRoom