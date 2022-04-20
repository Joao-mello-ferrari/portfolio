import type { NextPage } from 'next'
import { About } from '../components/About'
import { Header } from '../components/Header'

import styles from '../styles/Home.module.scss'
const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Header/>
      
        <About/>
        <div className={styles.a} id="experiences" style={{background: 'green', height: '100vh'}}/>
        {/* <div className={styles.a} id="experiences" style={{background: '#cc9000', height: '87.5vh'}}/>
        <div className={styles.a} id="projects" style={{background: 'purple', height: '87.5vh'}}/>
        <div className={styles.a} id="contact" style={{background: 'red', height: '90vh'}}/> */}
    </div>
  )
}

export default Home
