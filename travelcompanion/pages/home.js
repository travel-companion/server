 import Head from 'next/head'
 import styles from '../styles/Home.module.css'
 import AddStops from '../componenents/fireStore/AddStops'
import UsersManagment from '../componenents/fireStore/UsersManagment'
import AddCity from '../componenents/fireStore/AddCity'
 import AddLine from '../componenents/fireStore/AddLine'
 import ChatRoom from '../componenents/fireStore/chatRoom'
import Posts from '../componenents/fireStore/Posts'
 import SideBar from '../componenents/SideBar'
import Layout from '../componenents/Layout'
import Link from 'next/link'
 export default function Home() {
 return (
    <div className={styles.container}>
      <Head>
         <title>adminTC</title>
       <meta name='description' content='admin Travel Companion ' />
      </Head>
      
//       <div style={{
         position: "absolute",
         top: "0px",
         right: "0",
         width: "87%",
         height: "100%",
        
       }}>
         <SideBar />
               <h1 className='text-5xl text-center text-amber-600 mb-2'>Welcome to Travel Companion dashboard</h1>
              
        <Layout/>
        
       </div>
    </div>
  )
 }