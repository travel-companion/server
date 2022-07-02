import React from 'react'
import Head from 'next/head'
function Stops() {
  return (
        <div>
            <Head>
                <title>manage stops</title>
            </Head>
            <div style={{
        position: "absolute",
        top: "0px",
        right: "0",
        width: "87%",
        height: "100%",
        
      }}>
        <SideBar/>
              <h1 className='text-5xl'>Welcome to Next</h1>
              
              <AddStops />
        
      </div>
        </div>
  )
}

export default Stops