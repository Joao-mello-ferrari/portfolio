import { WebLink } from "./WebLink"

import styles from './Webnav.module.scss'

export function WebNav(){
  return(
    <nav className={styles.webNav}>
      <WebLink href='/about' name='About'/>
      <WebLink href='/experiences' name='Experiences'/>
      <WebLink href='/projects' name='Projects'/>
      <WebLink href='/contact' name='Contact'/>
    </nav>
  )
}