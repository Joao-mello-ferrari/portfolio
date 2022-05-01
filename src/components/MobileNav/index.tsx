import { MobileLink } from "./MobileLink";

import styles from './Link.module.scss'

export function MobileNav(){
  return(
    <nav className={styles.mobileNav}>
      <MobileLink name="About" href="/about"/>
      <MobileLink name="Experiences" href="/experiences"/>
      <MobileLink name="Projects" href="/projects"/>
      <MobileLink name="Contact" href="/contact"/>
    </nav>
  )
}