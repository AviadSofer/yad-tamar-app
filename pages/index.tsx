import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="האפליקציה של יד תמר" />
        <link rel="icon" href="/favicon.ico" />
        <title>מה שכבר מוכן</title>
      </Head>
      <main className={styles.main}>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
