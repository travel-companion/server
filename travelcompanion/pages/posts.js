import React from 'react'
import Head from 'next/head'
import Posts from '../componenents/fireStore/Posts'
import SideBar from '../componenents/SideBar'
function Users() {
  return (
   
         
      
        <div>
            
        <SideBar/>
        <h1 class="block w-full text-center text-grey-darkest mb-11 text-5xl decoration-double text-zinc-900	"> Posts management</h1>
        <Posts />

      </div>

 
  )
}

export default Users