import Router from 'next/router'

import { Link } from './Link'
import { BurgerMenu } from './BurgerMenu'

import styles from './Header.module.scss'

export function Header(){
  return(
    <div className={styles.headerContainer}>
      <BurgerMenu />

      <span className={styles.name}>João Mello</span>
      
      <nav className={styles.webNav}>
        <Link href='/about' name='About'/>
        <Link href='/experiences' name='Experiences'/>
        <Link href='/projects' name='Projects'/>
        <Link href='/contact' name='Contact'/>
      </nav>
    </div>
  )
}