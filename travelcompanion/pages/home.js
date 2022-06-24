import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>adminTC</title>
        <meta name='description' content='admin Travel Compagnion ' />
      </Head>
      <h1>Welcome to Next</h1>
    </div>
  )
}
