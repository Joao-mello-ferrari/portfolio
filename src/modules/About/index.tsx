import Image from "next/image";

import { useTranslation } from 'next-i18next';
import { Link } from '../../components/Links'

import styles from './About.module.scss'
import cStyles from '../Common.module.scss'

export function About(){
  const { t: about } = useTranslation('about');

  return(
    <div className={cStyles.container}>
      <section className={styles.mobileAvatarContainer}>
        <div className={styles.avatar}>
          <Image 
            src='https://avatars.githubusercontent.com/u/67838782?v=4' 
            alt='my-self'
            width={240}
            height={240}
          />
        </div>
        
      </section>

      <section className={styles.description}>
       
        <div>
          <p>{about('t_1')}</p>
          <p>{about('t_2')}</p>
        </div>
        
        <div>
          <p>{about('t_3')}</p>
          <p>{about('t_4')}</p>
        </div>
        
        <div>
          <p>{about('t_5')} ⬇️</p>
          <ul>
            <li>{about('list_1')}</li>
            <li>{about('list_2')}</li>
            <li>{about('list_3')}</li>
          </ul>
        </div>
        
        <div>
          <p>{about('t_6')}</p>
        </div>
        
        <div>
          <p>
          {about('t_7')}
          <Link 
            to="https://ifrs.edu.br/riogrande/"
            content={about('link_1')}
          />
          {about('t_8')}
          <Link 
            to="https://www.obr.org.br/"
            content={about('link_2')}
          />
          .
          </p>
        </div>
      </section>
      
      <section className={styles.webAvatarContainer}>
        <Image 
          className={styles.avatar}
          src='https://avatars.githubusercontent.com/u/67838782?v=4' 
          alt='my-self'
          width={280}
          height={280}
        />
      </section>
    </div>
    
  )
}