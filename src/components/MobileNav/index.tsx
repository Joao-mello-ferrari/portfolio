import { useTranslation } from "next-i18next";
import { MobileLink } from "./MobileLink"

import styles from './Mobilenav.module.scss'

export function MobileNav(){
  const { t: common } = useTranslation('common');
  
  return(
    <nav className={styles.mobileNav}>
      <MobileLink name={common('nav.about')} href='/about'/>
      <MobileLink name={common('nav.experiences')} href='/experiences'/>
      <MobileLink name={common('nav.projects')} href='/projects' />
      <MobileLink name={common('nav.contact')} href='/contact'/>
    </nav>
  )
}