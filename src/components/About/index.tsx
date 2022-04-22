import Image from "next/image";

import styles from './About.module.scss'

export function About(){
  return(
    <div className={styles.container}>
      <section className={styles.description}>
       
        <div>
          <p>My go to work is web development, specially with React library and Next.js framework.</p>
          <p>Im really into this area, so that i&apos;m always looking for creating even more amazing and performatic applications, aiming for a better user experience.</p>
        </div>
        <div>
          <p>I first started programming for robotics, but in middle 2020 I&apos; came across web development.</p>
          <p>Since then, I&apos;ve been studying and developing each time more applications, with diferente features and goals.</p>
        </div>
        <div>
          <p>I started to realize how powerfull programming skills could be, due to the variety of situations I could use it to my favor.
          During my web lifetime, I&apos;ve created plenty of websites, some of which are listed below ⬇️</p>
          <ul>
            <li>A graph software, which connects to a custom LiDAR and displays mapped data</li>
            <li>A learning platform</li>
            <li>A worldwide forecast application, with some fancy graphs</li>
          </ul>
        </div>
        <div>
          <p>I also develop node.js based API`s, usually integrating with relational databases and docker. Many os those backends have been deployed using a VPS, and in some cases the fronend as well.</p>
          <p>I am Industrial Automation Technician, graduated at&nbsp;
            <a href="https://ifrs.edu.br/riogrande/" target="_blank" rel="noreferrer">
              IFRS - Campus Rio Grande
            </a>
            . During my highshool, I&apos;ve enrolled in a robotics project called ASiMov (Automation, Systems and Movement),
            which provided my experience in the development of autunomous robots. The goal was to compete at the&nbsp;
            <a href="https://www.obr.org.br/" target="_blank" rel="noreferrer">
              Brasilian Robotics Olympics
            </a>
            .
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