import styles from '../styles/Home.module.css'

import { Button } from '../components/Button'

import { useAuth } from 'src/contexts/AuthContext';

export default function Home() {
  const { singIn } = useAuth()

  const data = {
    email: "diego@diegozf.com.br",
    password: "123456"
  }

  return (
    <div className={styles.container}>
      <Button onClick={() => singIn(data)}>Opa</Button>
    </div>
  )
}
