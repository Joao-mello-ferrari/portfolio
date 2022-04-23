import { About as AboutComponent } from '../components/About'
import { Header } from '../components/Header'

import styles from '../styles/Home.module.scss'
export default function About(){

  return (
    <div className={styles.container}>
      
      <Header/>
      <AboutComponent />
    </div>
  )
}
