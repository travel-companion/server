import React, { useState, useEffect } from 'react'
import { collection, addDoc,GeoPoint } from "firebase/firestore";
import { db } from '../../firebase/initFirebase';
function AddStops() {
  const [name, setName] = useState("");
  const [lat, setLat] = useState(0);
  const [lon, setlon] = useState(0);
  const [type, setType] = useState("");
  const [all, setall] = useState([]);

  const sendData = async () => {
    try {
      const docRef=await addDoc(collection(db,"stops"),{
        name: name,
        position: new GeoPoint(lat,lon),
        type: type,
        all: all
      });
      console.log(docRef);

    } catch (error) {
      console.log(error);
    }

  }
  return (
    <div>
      <input onChange={(e)=>setName(e.target.value)} type='text' placeholder="name" />
      <input onChange={(e)=>setLat(e.target.value)} type="number" placeholder="lat" />
      <input onChange={(e)=>setlon(e.target.value)}type="number" placeholder="long" />
      <select onChange={(e)=>setType(e.target.value)}name="type" id="type-select">
        <option value="bus">bus</option>
        <option value="train">train</option>
        <option value="metro">metro</option>
      </select>
      <button onClick={sendData}>send</button>
    </div>
  )
}

export default AddStops