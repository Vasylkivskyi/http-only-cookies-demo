import React from 'react';
import styles from '../../styles/Home.module.css';
import Head from 'next/head';


const Layout = ({children}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>HTTP-ONLY COOKIES DEMO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        Best footer ever 🤪
      </footer>
    </div>
  )
}

export default Layout;
