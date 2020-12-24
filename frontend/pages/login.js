import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Layout from '../src/components/Layout';
import React, { useState } from 'react';
import { API_URL } from '../src/constants';
import Router from 'next/router';
import axios from 'axios';


export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');

  const { email, password } = formData;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      data: formData
    });
    if (res.status === 200) {
      showMessage(res.data);
      setTimeout(() => Router.push('/secret'), 2000);
    } else {
      showMessage(res.data);
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const showMessage = (msg) => {
    setError(msg);
    setTimeout(() => setError(''), 2000);
  }

  return (
    <Layout>
      <>
        <h1 className={styles.title}>
          Login page 🥰
        </h1>
        <div className={styles["buttons-container"]}>
          <Link href="/"><a className={styles.button}>Home</a></Link>
        </div>
        <form className={styles['login-form']} onSubmit={handleSubmit}>
          <input
            name="email"
            className={styles.input}
            type="email"
            value={email}
            onChange={handleChange}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            size="50"
            required
          />
          <input
            name="password"
            className={styles.input}
            type="password"
            value={password}
            onChange={handleChange}
            required
          />
          <div className={styles.error}>{error}</div>
          <button type="submit" className={styles.button}>Submit</button>
        </form>
        <p>You can test login with this credentials:</p>
        <p><strong>Email:</strong> test@test.com</p>
        <p><strong>Password:</strong> testPassword1234</p>
      </>
    </Layout>
  )
}
