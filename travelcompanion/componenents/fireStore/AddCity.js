import React, { useState, useEffect } from 'react'
import { collection, addDoc, query, where, doc, getDoc, getDocs, setDoc,updateDoc } from "firebase/firestore";
import { db } from '../../firebase/initFirebase';
function AddCity() {
    const [name, setName] = useState("");
    const [oneStop, setOneStop] = useState({})
    const [stops, setStops] = useState([]);
    const [allStops, setAllStops] = useState([]);
    const [update, setUpdate] = useState(false)
    useEffect(() => {

        getAll()
    }, [update])
    const dynamiqueUpdate = () => {
        setUpdate(!update)
    }

    const getAll = async () => {
        try {

            const q = query(collection(db, "stops"));
            const querySnapshot = await getDocs(q);
            var arr = []
            querySnapshot.forEach((doc) => {
                if (!doc.data().city) {
                    arr.push({ data: doc.data(), id: doc.id })
                }
                setAllStops(arr);
            });
        } catch (error) {
            console.log(error);
        }
    }

    const sendData = async () => {
        let toSend = stops.map((e) => { return doc(db, 'stops/' + e.id) })
        console.log(toSend);
        try {
            const docRef = await addDoc(collection(db, "citys"), {
                name: name,
                stops: toSend
            });
            console.log(docRef);

        } catch (error) {
            console.log(error);
        }
        toSend.forEach(element => {
             updateDoc(doc(db, "stops", element.id), {
                city: name
              });
        });
    }
    const addToStop = () => {
        let exist = false
        for (let i = 0; i < stops.length; i++) {
            stops[i].id === oneStop.id ? exist = true : exist
        }
        if (!exist) {
            setStops([...stops, oneStop])
            dynamiqueUpdate();
        }
    }
    return (
        <div>
              <br/>  
            <input onChange={(e) => setName(e.target.value)} type='text' placeholder="name" 
             className="border py-2 px-10 text-grey-darkest" />
       
            <select  onChange={(e) => setOneStop(JSON.parse(e.target.value))} name="type" id="type-select">
                {
                    allStops.map((e, i) => {
                        return <option value={JSON.stringify({ id: e.id, name: e.data.name })} key={i}>{e.data.name}</option>
                        
                    })
                }
            </select>
            <button onClick={addToStop} class="inline-block px-14 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out">add</button><br />
            {stops.map((e, i) => { return <p key={i}>{e.name}</p> })}
            <br />
            <button onClick={sendData} data-icon="send" class="inline-block px-14 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">send</button>
        </div>
    )
}

export default AddCity