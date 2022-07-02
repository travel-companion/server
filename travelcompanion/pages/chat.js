import React from 'react'
import Head from 'next/head'
import SideBar from '../componenents/SideBar'
import ChatRoom from '../componenents/fireStore/chatRoom'
function Chat() {
  return (
        <div>
            <Head>
                <title>manage Chats</title>
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
                <div>
            
          <ChatRoom/>
        </div>
          
        </div>
        </div>
  )
}

export default Chat