import React from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Layout from '../src/components/Layout';
import api from '../src/utils/axiosConfig';
import { API_URL } from '../src/constants';


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

Secret.getInitialProps = async ({ req, res, match, history, location, ...ctx }) => {
  let result = await api.get(`${API_URL}/secret`);
  console.log(result);
  return {
    result: result
  }
}

export default Secret;


