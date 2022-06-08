import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

// import Header from '../components/Header'
// import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
  //   <>
  
  //  <h1 className={styles['title-homepage']}>Welcome fikri</h1>

  //  </>


  <>
  <Head>
    <title>Next JS | Home Page</title>
    <meta name="description" content="website index next js" />
  </Head>
  <Layout>
    <Image src="/zara.png" width={200} height={200} alt="zara" />
    <h1 className={styles['title-homepage']}>Welcome fikri</h1>
  </Layout>
  </>
  )
}

export default Home

