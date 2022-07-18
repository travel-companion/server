import React from 'react'
import Head from 'next/head'
import AddLine from '../componenents/fireStore/AddLine'
import AddStops from '../componenents/fireStore/AddStops'
import SideBar from '../componenents/SideBar'
import AddCity from '../componenents/fireStore/AddCity'
function Lines() {
  return (
        
        
        
    <div class="flex items-center h-screen w-full bg-teal-lighter">
    <div class="w-full bg-white rounded shadow-lg p-20 m-15 max-w-6xl mx-4	 ml-12 md:mx-auto">
          <SideBar/>
          <h1 class="block w-full text-center text-grey-darkest mb-6 text-5xl decoration-double text-zinc-900	"> Station management</h1>
          <div>
            <br/>
          <AddLine/>
          <br/> <br/>
          <AddStops/>
          <br/> <br/>
          <AddCity/>
        </div>
        </div>
        </div>
  )
}

export default Lines