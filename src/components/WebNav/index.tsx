import { useTranslation } from "next-i18next";
import { WebLink } from "./WebLink"

import styles from './Webnav.module.scss'

export function WebNav(){
  const { t: common } = useTranslation('common');

  return(
    <nav className={styles.webNav}>
      <WebLink name={common('nav.about')} href='/about'/>
      <WebLink name={common('nav.experiences')} href='/experiences'/>
      <WebLink name={common('nav.projects')} href='/projects' />
      <WebLink name={common('nav.contact')} href='/contact'/>
    </nav>
  )
}