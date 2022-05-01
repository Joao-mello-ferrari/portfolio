import { Header } from '../components/Header'
import { SidebarDrawer } from '../components/MobileSidebar'
import { Projects as ProjectsModule} from '../modules/Projects'
import { Footer } from '../components/Footer'

import styles from '../styles/Home.module.scss'

export default function Projects(){
  return(
    <div className={styles.container}>
      <Header/>
      <SidebarDrawer/>
      <ProjectsModule />
      <Footer/>
    </div>
  )
}