import { useEffect, useState } from 'react'

import { Link } from './Link'
import styles from './Header.module.scss'

export function Header(){
  return(
    <div className={styles.headerContainer}>
      <span className={styles.name}>João Mello</span>
      <nav className={styles.nav}>
        <Link href='/about' name='About'/>
        <Link href='/experiences' name='Experiences'/>
        <Link href='/projects' name='Projects'/>
        <Link href='/contact' name='Contact'/>
      </nav>
    </div>
  )
}