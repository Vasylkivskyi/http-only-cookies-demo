import React from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Layout from '../src/components/Layout';
import axios from 'axios';
axios.defaults.withCredentials = true;
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
  let result = await axios.get(`${API_URL}/secret`, {
    crossdomain: true,
  });
  console.log(result);
  return {
    result: result.data
  }
}

export default Secret;


