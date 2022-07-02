import React from 'react'
import Head from 'next/head'
import AddCity from '../componenents/fireStore/AddCity'
import SideBar from '../componenents/SideBar'
function Citys() {
  return (
           <div style={{
          position: "absolute",
          top: "0px",
          right: "0",
          width: "87%",
          height: "100%",
          
        }}>
          <SideBar/>
                <h1 className='text-5xl'>Welcome to Next</h1>
                <div>
            <Head>
                <title>manage lines</title>
            </Head>
          <AddCity/>
        </div>
          
        </div>
        
  )
}

export default Citys