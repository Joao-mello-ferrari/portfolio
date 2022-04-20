import Image from "next/image";

import styles from './About.module.scss'

export function About(){
  return(
    <div className={styles.container} id="about">
      <section className={styles.description}>
       
        <div>
          <p>My go to work is web development, specially with React library and Next.js framework.</p>
          <p>Im really into this area, so that i always look for creating even more amazing and performatic applications, aiming for a better user experience.</p>
        </div>
        <div>
          <p>I also develop node.js based API`s, usually integrating with relational databases and docker.</p>
          <p>I am Industrial Automation Technician, graduated at&nbsp;
            <a href="https://ifrs.edu.br/riogrande/" target="_blank" rel="noreferrer">
              IFRS - Campus Rio Grande
            </a>
            , with solid experience in the development of autunomous robots and intership in&nbsp; 
            <a href="https://www.refinariariograndense.com.br/site/" target="_blank" rel="noreferrer">
              Refinaria de Petróleo Riograndense
            </a>
            , on the instrumentation area.</p>
        </div>
        <div>
          <p>In August 2021 I started a new position on&nbsp;
            <a href="https://www.bytejr.com.br/" target="_blank" rel="noreferrer">
              ByteJr
            </a> 
            , as a full stack developer. During the time I`ve spent there, I`ve worked with React (front-end)
            and nodeJS + postgres (back-end).
          </p>
          <p>In April 2022 I had the pleasure of being applied to an university scholarship.
            The project was organized by&nbsp;
            <a href="http://itecfurg.org/" target="_blank" rel="noreferrer">
              iTec - Furg
            </a> 
            , a computer science center. There, I have been given the oportunity to work alongside&nbsp; 
            <a href="http://www.aurosrobotics.com/" target="_blank" rel="noreferrer">
              Auros Robotics
            </a>
            , by improving their web site and developing a mobile app, that monitures agricultural data. 
          </p>
        </div>
        
      </section>
      <section className={styles.avatarContainer}>
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