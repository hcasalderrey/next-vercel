 
 import { FC } from "react"
 
 import styles from "../layouts/MainLayout.module.css"
import Head from 'next/head'
import { NavBar } from "../NavBar"

interface Props {
  children: React.ReactNode;
}



export const MainLayout: React.FC<Props> = ({ children }) =>  {
  
    return (
    <div className={styles.container}>
      <Head>
        <title>Home - Hernan</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/> 

      <main className={styles.main}>
           {children}
       </main>
    </div>
  
  )
}
