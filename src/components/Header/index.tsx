import Router from 'next/router'

import { BurgerMenu } from './BurgerMenu'
import { WebNav } from '../WebNav'

import styles from './Header.module.scss'

export function Header(){
  return(
    <div className={styles.headerContainer}>
      <BurgerMenu />

      <span className={styles.name}>João Mello</span>
      
      <WebNav/>
    </div>
  )
}