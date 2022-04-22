import { Header } from '../components/Header'
import { Projects as ProjectsComponent} from '../components/Projects'

import styles from '../styles/Home.module.scss'

export default function Projects(){
  return(
    <div className={styles.container}>
      <Header/>
      <ProjectsComponent />
    </div>
  )
}