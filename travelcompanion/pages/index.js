import Head from 'next/head'
import styles from '../styles/Home.module.css'
import AddStops from '../componenents/fireStore/AddStops'
import UsersManagment from '../componenents/fireStore/UsersManagment'
import AddCity from '../componenents/fireStore/AddCity'
import AddLine from '../componenents/fireStore/AddLine'
import ChatRoom from '../componenents/fireStore/chatRoom'
import Posts from '../componenents/fireStore/Posts'
import SideBar from '../componenents/SideBar'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>adminTC</title>
        <meta name='description' content='admin Travel Compagnion ' />
      </Head>
      
      <div style={{
        position: "absolute",
        top: "0px",
        right: "0",
        width: "87%",
        height: "100%",
        
      }}>
        <SideBar />
              <h1 className='text-5xl'>Welcome to Next</h1>

        <AddStops/>
      <AddCity/>
      <AddLine/>
      <ChatRoom/>
      <h2>users</h2>
      <UsersManagment/>
      <Posts/>
      </div>
      {/*  */}
    </div>
  )
}
