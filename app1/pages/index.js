import * as React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import PrimaryNavigation from '../components/primary-navigation/primary-navigation'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <PrimaryNavigation>nav</PrimaryNavigation>
        <div className={styles.grid}> 
        </div>
      </main>
    </div>
  )
}
