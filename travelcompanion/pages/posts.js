import React from 'react'
import Head from 'next/head'
import Posts from '../componenents/fireStore/Posts'
import SideBar from '../componenents/SideBar'
function Users() {
  return (
        <div>
            <Head>
                <title>manage posts</title>
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
              
              <Posts />
        
      </div>
        </div>
  )
}

export default Users