import React from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Layout from '../src/components/Layout';
import api from '../src/utils/axiosConfig';
import { API_URL } from '../src/constants';
import Router from 'next/router';


const Secret = () => {
  return (
    <Layout>
      <>
        <h1 className={styles.title}>
          Secret page 🤫
        </h1>
        <div className={styles["buttons-container"]}>
          <Link href="/"><a className={styles.button}>Home</a></Link>
        </div>
      </>
    </Layout>
  );
}

Secret.getInitialProps = async (ctx) => {
  const { res } = ctx;
  const response = await api.get(`${API_URL}/secret`);
  if (response.status === 200) {
    return {
      success: true
    }
  }
  if(typeof window === 'undefined'){
    res.writeHead(302, { Location: '/login' })
    res.end()
    return {}
  }
  Router.push('/login')
  return {}
}

export default Secret;


