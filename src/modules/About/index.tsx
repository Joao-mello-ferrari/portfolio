import Image from "next/image";

import { useTranslation } from 'next-i18next';

import styles from './About.module.scss'
import cStyles from '../Common.module.scss'

export function About(){
  const { t: about } = useTranslation('about');

  return(
    <div className={cStyles.container}>
      <section className={styles.mobileAvatarContainer}>
        <div className={styles.waveContainer}>
          <div className={styles.wave}>
            <Image 
              src='/assets/wave.svg' 
              alt='wave-background'
              width={160}
              height={160}
            />
          </div>
        </div>
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
          <p>{about('t_7')}&nbsp;
            <a href="https://ifrs.edu.br/riogrande/" target="_blank" rel="noreferrer">
              {about('link_1')}
            </a>
            {about('t_8')}&nbsp;
            <a href="https://www.obr.org.br/" target="_blank" rel="noreferrer">
              {about('link_2')}
            </a>
            .
          </p>
        </div>
      </section>
      
      <section className={styles.webAvatarContainer}>
        <div className={styles.wave}>
          <Image 
            src='/assets/wave.svg' 
            alt='wave-background'
            width={240}
            height={240}
          />
        </div>
        <Image 
          className={styles.avatar}
          src='https://avatars.githubusercontent.com/u/67838782?v=4' 
          alt='my-self'
          width={240}
          height={240}
        />
      </section>
    </div>
    
  )
}