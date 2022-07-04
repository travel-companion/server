import React from 'react'
import Head from 'next/head'
import AddLine from '../componenents/fireStore/AddLine'
import AddStops from '../componenents/fireStore/AddStops'
import SideBar from '../componenents/SideBar'
import AddCity from '../componenents/fireStore/AddCity'
function Lines() {
  return (
        
        
        
        <div style={{
          position: "absolute",
          top: "0px",
          right: "0",
          width: "87%",
          height: "100%",
          
        }}>
          <SideBar/>
                <h1 className='text-5xl'>station management</h1>
                <div>
            <Head>
                <title>manage lines</title>
            </Head>
          <AddLine/>
          <AddStops/>
          <AddCity/>
        </div>
          
        </div>
  )
}

export default Lines