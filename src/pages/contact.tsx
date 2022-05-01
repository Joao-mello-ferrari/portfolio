import { Header } from '../components/Header'
import { SidebarDrawer } from '../components/MobileSidebar'
import { Contact as ContactModule } from '../modules/Contact'

import styles from '../styles/Home.module.scss'

export default function Contact(){
  return(
    <div className={styles.container}>
      <Header/>
      <SidebarDrawer/>
      <ContactModule />
    </div>
  )
}