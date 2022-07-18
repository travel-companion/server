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
      <br/>
      <input  className="border py-2 px-10 text-grey-darkest" onChange={(e)=>setName(e.target.value)} type='text' placeholder="name" />
    
      <input  className="border py-2 px-10 text-grey-darkest" onChange={(e)=>setLat(e.target.value)} type="number" placeholder="lat" />

      <input  className="border py-2 px-10 text-grey-darkest" onChange={(e)=>setlon(e.target.value)}type="number" placeholder="long" />
      <br/>
      <br/>
   
       <select class="form-select appearance-none
      block
  
      px-20
      py-3
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-blue-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      
      onChange={(e)=>setType(e.target.value)}name="type" id="type-select">
        <br/>
        <option value="bus">bus</option>
        <option value="train">train</option>
        <option value="metro">metro</option>
      </select>
      <br/>
       <button class="inline-block px-14 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out" onClick={sendData}>send</button>
    </div>
  )
}

export default AddStops