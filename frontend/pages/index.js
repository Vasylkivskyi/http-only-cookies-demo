import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Layout from '../src/components/Layout';

export default function Home() {
  return (
    <Layout>
      <>
        <h1 className={styles.title}>
          Home page
        </h1>
        <div className={styles["buttons-container"]}>
          <Link href="/login"><a className={styles.button}>Login</a></Link>
          <Link href="/secret"><a className={styles.button}>See top secret info</a></Link>
        </div>
      </>
    </Layout>
  )
}
