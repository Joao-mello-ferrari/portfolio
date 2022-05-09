import Router from 'next/router'

import { BurgerMenu } from './BurgerMenu'
import { WebNav } from '../WebNav'
import { LanguageSwitch } from '../LanguageSwitch'


import styles from './Header.module.scss'

type HeaderProps={ locale: string; }

export function Header({ locale }: HeaderProps){

  return(
    <div className={styles.headerContainer}>
      <BurgerMenu />
      <span className={styles.name}>João Mello</span>
      <WebNav/>
      <LanguageSwitch hoclass={styles.headerSwitch} locale={locale}/>
    </div>
  )
}