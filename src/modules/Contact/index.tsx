import { useTranslation } from "next-i18next";

import { Link } from '../../components/Links'
import { FiLinkedin, FiYoutube, FiGithub, 
  FiInstagram, FiTwitter, FiMail, FiBook, FiPhoneCall } from 'react-icons/fi'

import styles from './Contact.module.scss'
import cStyles from '../Common.module.scss'

export function Contact(){
  const { t: contact } = useTranslation('contact');

  return(
    <div className={`${cStyles.container} ${styles.container}`}>
      <section className={styles.description}>
       <div>
        <div className={styles.singleContactContainer}>
          <FiLinkedin/>
          <Link
            to="https://www.linkedin.com/in/joao-mello-ferrari/"
            content="Linkedin"
            white
          />
        </div>

        <div className={styles.singleContactContainer}>
          <FiYoutube/>
          <Link
            to="https://www.youtube.com/channel/UCN_9nlxnbWdOcsR-CJiS7Lw"
            content="YouTube"
            white
          />
        </div>

        <div className={styles.singleContactContainer}>
          <FiGithub/>
          <Link
            to="https://github.com/Joao-mello-ferrari"
            content="Github"
            white
          />
        </div>

        <div className={styles.singleContactContainer}>
          <FiInstagram/>
          <Link
            to="https://www.instagram.com/joaomelloferrari/"
            content="Instagram"
            white
          />
        </div>

        <div className={styles.singleContactContainer}>
          <FiTwitter/>
          <Link
            to="https://twitter.com/joao_mellof"
            content="Twitter"
            white
          />
        </div>

        <div className={styles.singleContactContainer}>
          <FiMail/>
          <Link
            to="mailto: joao.vico.mellof@gmail.com"
            content={contact('email')}
            white
          />
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