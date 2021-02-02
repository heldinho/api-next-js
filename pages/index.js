import Head from 'next/head'
import styles from '../styles/Home.module.css'
import * as $ from 'jquery'

export default function Home() {
  function init() {
    // const body = document.querySelector('body')
    // body.onselectstart = 'return false'
    // body.oncontextmenu = 'return false'
    // body.ondragstart = 'return false'
    // body.onmouseover = `window.status="..message perso.."; return true;`
    // document.onselectstart = new Function('return false')
    // document.oncontextmenu = new Function('return false')
    // function disableselect(e) {
    //   return false
    // }
    // function reEnable() {
    //   return true
    // }
    // if (window.sidebar) {
    //   document.onmousedown = disableselect
    //   document.onclick = reEnable
    // }
  }

  init()

  return (
    <div className={styles.container}>
      <Head>
        <title>API Helder Passos</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href={'javascript:'}>Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles['grid-balance']}>
          <a href={'javascript:'} className={styles['card-balance']}>
            <h3>Saldo Disponível</h3>
            <p>R$ 1.000.000,00</p>
          </a>
          <a href={'javascript:'} className={styles['card-balance']}>
            <h3>Saldo a Liberar</h3>
            <p>R$ 50.000,00</p>
          </a>
        </div>

        <div className={styles.grid}>
          <a href={'javascript:'} className={styles.card}>
            <h3>Pagamentos &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href={'javascript:'} className={styles.card}>
            <h3>Transferências &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a href={'javascript:'} className={styles.card}>
            <h3>Extrato &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a href={'javascript:'} className={styles.card}>
            <h3>Configuração &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href={'javascript:'} rel="noopener noreferrer">
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
