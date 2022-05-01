import { Header } from '../components/Header'
import { SidebarDrawer } from '../components/MobileSidebar'
import { Projects as ProjectsComponent} from '../components/Projects'

import styles from '../styles/Home.module.scss'

export default function Projects(){
  return(
    <div className={styles.container}>
      <Header/>
      <SidebarDrawer/>
      <ProjectsComponent />
    </div>
  )
}