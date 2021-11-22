import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/Button'
import { useDataBeastsContext } from '../context/DataBeastsContext'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const { userAddress, syncWallet, desyncWallet } = useDataBeastsContext();

  return (
    <div className={styles.container}>
      <Head>
        <title>DataBeasts</title>
        <meta name="description" content="Interact With Your DataBeasts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          DataBeasts
        </h1>
        {typeof userAddress !== 'undefined' && (
          <div className={styles.description}> 
            <h3>{userAddress}</h3>
            <Button text="Desync" onClick={desyncWallet} />
          </div>
        )}
        {typeof userAddress === 'undefined' && <Button text="Sync" onClick={syncWallet} />}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home