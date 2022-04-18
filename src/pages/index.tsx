import type { NextPage } from 'next'
import { Header } from '../components/Header'

import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Header/>
      <div id="about" style={{background: 'green', height: '87.5vh'}}/>
      <div id="experiences" style={{background: '#cc9000', height: '87.5vh'}}/>
      <div id="projects" style={{background: 'purple', height: '87.5vh'}}/>
      <div id="contact" style={{background: 'red', height: '87.5vh'}}/>
    </div>
  )
}

export default Home
