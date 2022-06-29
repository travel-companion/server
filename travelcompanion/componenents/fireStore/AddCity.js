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

            <input onChange={(e) => setName(e.target.value)} type='text' placeholder="name" />
            <select onChange={(e) => setOneStop(JSON.parse(e.target.value))} name="type" id="type-select">
                {
                    allStops.map((e, i) => {
                        return <option value={JSON.stringify({ id: e.id, name: e.data.name })} key={i}>{e.data.name}</option>
                    })
                }
            </select>
            <button onClick={addToStop}>add</button><br />
            {stops.map((e, i) => { return <p key={i}>{e.name}</p> })}
            <br />
            <button onClick={sendData}>send</button>
        </div>
    )
}

export default AddCity