import { Contact as ContactComponent } from '../components/Contact'
import { Header } from '../components/Header'

import styles from '../styles/Home.module.scss'

export default function Contact(){
  return(
    <div className={styles.container}>
      <Header/>
      <ContactComponent />
    </div>
  )
}