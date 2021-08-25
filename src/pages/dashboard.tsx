import styles from '../styles/Home.module.css'

import { Button } from '../components/Button'

import { useAuth } from 'src/contexts/AuthContext';
import { useEffect } from 'react';
import { api } from 'src/services/api';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { getApiClient } from 'src/services/axios';

export default function Home() {
  const { user, logOut } = useAuth()

  return (
    <div className={styles.container}>

      {user?.name ? 'Olá ' + user?.name : ''} <br />
      Dashboard

      <br />
      <br />
      <br />

      <Button onClick={() => { logOut() }}>Sair</Button>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = getApiClient(ctx)
  const { authToken: token } = parseCookies(ctx)

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const data = await apiClient.get('/user')

  console.log("eee", data)

  return {
    props: {}
  }

}
