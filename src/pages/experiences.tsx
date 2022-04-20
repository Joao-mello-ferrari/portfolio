import { Experiences as ExperiencesComponent } from '../components/Experiences'
import { Header } from '../components/Header'

import styles from '../styles/Home.module.scss'
export default function About(){

  return (
    <div className={styles.container}>
      <Header/>
      <ExperiencesComponent/>
      
    </div>
  )
}
