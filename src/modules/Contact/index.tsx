import Image from "next/image";

import { FiLinkedin, FiYoutube, FiGithub, 
  FiInstagram, FiTwitter, FiMail, FiBook, FiPhoneCall } from 'react-icons/fi'

import styles from './Contact.module.scss'
import cStyles from '../Common.module.scss'

export function Contact(){
  return(
    <div className={`${cStyles.container} ${styles.container}`}>
      <section className={styles.description}>
       <div>
        <div className={styles.singleContactContainer}>
          <FiLinkedin/>
          <a href="https://www.linkedin.com/in/joao-mello-ferrari/" target="_blank" rel="noreferrer">
            Linkedin
          </a>
        </div>

        <div className={styles.singleContactContainer}>
          <FiYoutube/>
          <a href="https://www.youtube.com/channel/UCN_9nlxnbWdOcsR-CJiS7Lw" target="_blank" rel="noreferrer">
            YouTube 
          </a>
        </div>

        <div className={styles.singleContactContainer}>
          <FiGithub/>
          <a href="https://github.com/Joao-mello-ferrari" target="_blank" rel="noreferrer">
            Github
          </a>
        </div>

        <div className={styles.singleContactContainer}>
          <FiInstagram/>
          <a href="https://www.instagram.com/joaomelloferrari/" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>

        <div className={styles.singleContactContainer}>
          <FiTwitter/>
          <a href="https://twitter.com/joao_mellof" target="_blank" rel="noreferrer">
            Twitter
          </a>
        </div>

        <div className={styles.singleContactContainer}>
          <FiMail/>
          <a href="mailto: joao.vico.mellof@gmail.com" target="_blank" rel="noreferrer">
              Send me and e-mail!
          </a>
        </div>
       </div>
       
       
        
        
      </section>
      <section className={styles.iconsContainer}>
        <FiPhoneCall className={styles.phone}/>
        <div className={styles.cap}/>
        <FiBook className={styles.book}/>
      </section>
    </div>
    
  )
}