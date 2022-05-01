import { About as AboutComponent } from '../components/About'
import { Header } from '../components/Header'
import { SidebarDrawer } from '../components/MobileSidebar'

import styles from '../styles/Home.module.scss'
export default function About(){

  return (
    <div className={styles.container}>
      
      <Header/>
      <SidebarDrawer/>
      <AboutComponent />
    </div>
  )
}
