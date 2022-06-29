import React, { useState, useEffect } from 'react'
import { collection, addDoc, query, where, doc, getDoc, getDocs, setDoc,updateDoc,arrayUnion } from "firebase/firestore";
import { db } from '../../firebase/initFirebase';
function AddLine() {
    const [ref, setRef] = useState("");
    const [depart, setDeprat] = useState({})
    const [dest, setDest] = useState({});
    const [circuit, setCircuit] = useState([]);
    const [times, setTimes] = useState([]);
    const [allStops, setAllStops] = useState([]);
    const [oneStop, setOneStop] = useState({});
    const [update, setUpdate] = useState(false);




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
                    arr.push({ data: doc.data(), id: doc.id })               
                setAllStops(arr);
            });
        } catch (error) {
            console.log(error);
        }
    }

    const sendData = async () => {
        let toSend = circuit.map((e) => { return doc(db, 'stops/' + e.id) })
        let departToSend = doc(db,'stops/' + depart.id)
        let destToSend = doc(db,'stops/' + dest.id)

        try {
            const docRef = await addDoc(collection(db, "lines"), {
                ref:ref,
                depart:departToSend,
                dest:destToSend,
                circuit:toSend,
                times:times
            });
            console.log(docRef);

        } catch (error) {
            console.log(error);
        }
        updateDoc(doc(db, "stops", depart.id), {
            all: arrayUnion({line:ref})
          });
          updateDoc(doc(db, "stops", dest.id), {
            all: arrayUnion({line:ref})
          });
        toSend.forEach(element => {
             updateDoc(doc(db, "stops", element.id), {
                all: arrayUnion({line:ref})
              });
        });
    }
    const addToCircuit = () => {
        let exist = false
        for (let i = 0; i < circuit.length; i++) {
            circuit[i].id === oneStop.id ? exist = true : exist
        }
        if (!exist) {
            setCircuit([...circuit, oneStop])
            dynamiqueUpdate();
        }
    }
    return (
        <div>

            <input onChange={(e) => setRef(e.target.value)} type='text' placeholder="ref" />
            <select onChange={(e) => setDeprat(JSON.parse(e.target.value))} name="type" id="depart">
                {
                    allStops.map((e, i) => {
                        return <option value={JSON.stringify({ id: e.id, name: e.data.name })} key={i}>{e.data.name}</option>
                    })
                }
            </select>
            <select onChange={(e) => setDest(JSON.parse(e.target.value))} name="type" id="destination">
                {
                    allStops.map((e, i) => {
                        return <option value={JSON.stringify({ id: e.id, name: e.data.name })} key={i}>{e.data.name}</option>
                    })
                }
            </select>
            <select onChange={(e) => setOneStop(JSON.parse(e.target.value))} name="type" id="type-select">
                {
                    allStops.map((e, i) => {
                        return <option value={JSON.stringify({ id: e.id, name: e.data.name })} key={i}>{e.data.name}</option>
                    })
                }
            </select>
            <button onClick={addToCircuit}>add</button><br />
            {circuit.map((e, i) => { return <p key={i}>{e.name}</p> })}
            <br />
            <button onClick={sendData}>send</button>
        </div>
    )
}

export default AddLine