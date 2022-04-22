import { Link } from './Link'
import styles from './Header.module.scss'
import Router from 'next/router'

export function Header(){

  const getDefaultPath = () =>{
    if(typeof window !== "undefined") return Router.asPath;
    return '/About';
  }

  return(
    <div className={styles.headerContainer}>
      <span className={styles.name}>João Mello</span>
      
      <nav className={styles.webNav}>
        <Link href='/about' name='About'/>
        <Link href='/experiences' name='Experiences'/>
        <Link href='/projects' name='Projects'/>
        <Link href='/contact' name='Contact'/>
      </nav>

      <select 
        className={styles.mobileNav}
        onChange={(e)=>{Router.push(e.target.value)}}
        defaultValue={getDefaultPath()}
      >
        <option value="/about">About</option>
        <option value="/experiences">Experiences</option>
        <option value="/projects">Projects</option>
        <option value="/contact">Contact</option>
      </select>
    </div>
  )
}