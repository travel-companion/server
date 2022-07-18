import React from 'react'
import Head from 'next/head'
import SideBar from '../componenents/SideBar'
import ChatRoom from '../componenents/fireStore/chatRoom'
function Chat() {
  return (
    <div class="flex items-center h-screen w-full bg-teal-lighter">
    <div class="w-full bg-white rounded shadow-lg p-20 m-15 max-w-6xl mx-4	 ml-12 md:mx-auto">
      
      <h1 class="block w-full text-center text-grey-darkest mb-11 text-5xl decoration-double text-zinc-900	"> Chats management</h1>
        <div>
          <SideBar/>
        
                <div>
            
          <ChatRoom/>
        </div>
        </div>
        </div>
        </div>
  )
}

export default Chat