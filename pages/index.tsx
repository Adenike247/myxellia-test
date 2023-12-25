import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MainNavbar from '../src/components/MainNavbar'
import DashboardNavbar from '../src/components/DashboardNavbar'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Myxellia test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainNavbar />
      <DashboardNavbar/>
    </div>
  )
}

export default Home