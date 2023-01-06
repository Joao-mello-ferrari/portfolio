import { BurgerMenu } from './BurgerMenu'
import { WebNav } from '../WebNav'
import { LanguageSwitch } from '../LanguageSwitch'
import { Theme } from '../Theme'

import styles from './Header.module.scss'
import { useState } from 'react'

export type HeaderProps={ locale: string; }

export function Header({ locale }: HeaderProps){
  const [theme, setTheme] = useState(() => {
    const storedTheme = window.localStorage.getItem('@theme');
    
    if(!storedTheme){
      return 'dark';
    } 
    
    if(!['light', 'dark'].includes(storedTheme)){
      return 'dark';
    }

    document.documentElement.setAttribute("theme", storedTheme);
    return storedTheme as 'light' | 'dark';
  });

  function toggleTheme(theme: 'light' | 'dark'){
    window.localStorage.setItem('@theme', theme);
    document.documentElement.setAttribute("theme", theme);
    setTheme(theme);
  }

  return(
    <div className={styles.headerContainer}>
      <BurgerMenu />
      <span className={styles.name}>João Mello</span>
      <WebNav/>
      <LanguageSwitch hoclass={styles.headerSwitch} locale={locale}/>
      <Theme hoclass={styles.headerTheme} action={toggleTheme} theme={theme}/>
    </div>
  )
}