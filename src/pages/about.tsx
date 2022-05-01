import { Header } from '../components/Header'
import { SidebarDrawer } from '../components/MobileSidebar'
import { About as AboutModule } from '../modules/About'
import { Footer } from '../components/Footer'

import styles from '../styles/Home.module.scss'
export default function About(){

  return (
    <div className={styles.container}>
      <Header/>
      <SidebarDrawer/>
      <AboutModule />
      <Footer/>
    </div>
  )
}
