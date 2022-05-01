import { Contact as ContactComponent } from '../components/Contact'
import { Header } from '../components/Header'
import { SidebarDrawer } from '../components/MobileSidebar'

import styles from '../styles/Home.module.scss'

export default function Contact(){
  return(
    <div className={styles.container}>
      <Header/>
      <SidebarDrawer/>
      <ContactComponent />
    </div>
  )
}