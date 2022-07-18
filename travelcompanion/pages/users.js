import React from 'react'
import Head from 'next/head'
import UsersManagment from '../componenents/fireStore/UsersManagment'
import SideBar from '../componenents/SideBar'
function Users() {
  return (
  
      
     
        <div class="bg-white-50 text-tahiti">
  
        <SideBar />
        <br/>
        <br/>
       
        <h1 class="block w-full text-center text-grey-darkest mb-11 text-5xl decoration-double text-zinc-900	"> Users management</h1>
        <UsersManagment/>
      </div>
   
  )
}

export default Users