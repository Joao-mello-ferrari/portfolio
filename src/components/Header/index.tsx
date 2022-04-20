import { useEffect, useState } from 'react'

import { Link } from './Link'
import styles from './Header.module.scss'

export function Header(){
  const [shouldBeTransparent, setShouldBeTransparent] = useState(false);

  useEffect(()=>{
    if (typeof window !== "undefined") {
      window.addEventListener('scroll',(e)=>{
        if(window.scrollY > 0) setShouldBeTransparent(true);
        else setShouldBeTransparent(false);
      })
    }
  },[])

  return(
    <div 
      className={styles.headerContainer}
      // style={{background: shouldBeTransparent ? 'rgba(58,58,58,1)' : 'unset'}}
    >
      <span className={styles.name}>João Mello</span>
      <nav className={styles.nav}>
        <Link href='#about' name='About'/>
        <Link href='#experiences' name='Experiences'/>
        <Link href='#projects' name='Projects'/>
        <Link href='#contact' name='Contact'/>
      </nav>
    </div>
  )
}