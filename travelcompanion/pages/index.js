import Head from 'next/head'
import styles from '../styles/Home.module.css'
import WriteTocloudFirestore from '../componenents/fireStore/write'
import ReadFromcloudFirestore from '../componenents/fireStore/read'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>adminTC</title>
        <meta name='description' content='admin Travel Compagnion ' />
      </Head>
      <h1>Welcome to Next</h1>
      <WriteTocloudFirestore/>
      <ReadFromcloudFirestore/>
    </div>
  )
}
