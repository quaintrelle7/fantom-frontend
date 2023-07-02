import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../Components/Navbar/Navbar'
import Homepage from '../Components/Home/Homepage'

export default function Home() {
  return (
<div>
  <Head>
    <title>Carbon Credit</title>
  </Head>

 <Navbar/>
  <Homepage/>
</div>
  )
}
