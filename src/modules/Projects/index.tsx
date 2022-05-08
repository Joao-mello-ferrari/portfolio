import { useTranslation } from 'next-i18next';
import { Card } from './Card'
import { FiGithub, FiGlobe, FiYoutube } from "react-icons/fi";

import styles from './Projects.module.scss'
import Image from 'next/image';

export function Projects(){
  const { t: projects } = useTranslation('projects');

  return(
    <div className={styles.container}>
      <Card title={projects('eforecast.name')} date={projects('eforecast.date')} name="eforecast">
        <p>
          {projects('eforecast.content_1')}&nbsp;
          <a href="https://openweathermap.org/" target="_blank" rel="noreferrer">
          {projects('eforecast.link_1')}
          </a>
          &nbsp;{projects('eforecast.content_2')}
        </p>

        <div className={styles.bottomInfoContainer}>
          <div>
            <div className={styles.links}>
              <FiGithub/>
              <a href="https://github.com/Joao-mello-ferrari/e.forecast" target="_blank" rel="noreferrer">
              {projects('git')} 
              </a>
            </div>
            <div className={styles.links}>
              <FiGlobe/> 
              <a href="https://illustrious-cajeta-9465bc.netlify.app/" target="_blank" rel="noreferrer">
              {projects('online')} 
              </a>
            </div>
          </div>
          <div className={styles.techs}>
            <div className={styles.links}>
              <Image 
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" 
                width={24} 
                height={24} 
                alt="nextjs"
              />
              <span>Next.js</span>
            </div>
            <div className={styles.links}>
              <Image 
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg" 
                width={24} 
                height={24} 
                alt="typescript"
              />
              <span>Typescript</span>
            </div>
          </div>
        </div>
      </Card>

      <Card title={projects('elearning.name')} date={projects('elearning.date')} name="elearning">
        <p>
        {projects('elearning.content')}
        </p>
        
        <div className={styles.bottomInfoContainer}>
          <div>
            <div className={styles.links}>
              <FiGithub/>
              <a href="https://github.com/Joao-mello-ferrari/e.learning_frontend" target="_blank" rel="noreferrer">
              {projects('git')}
              </a>
            </div>
            <div className={styles.links}>
              <FiGlobe/> 
              <a href={`https://6237abede42099088ab7ba6c--thirsty-hawking-4883c2.netlify.app/`} target="_blank" rel="noreferrer">
              {projects('online')}
              </a>
            </div>
          </div>
          <div className={styles.techs}>
            <div className={styles.links}>
              <Image 
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" 
                width={24} 
                height={24} 
                alt="nextjs"
              />
              <span>Next.js</span>
            </div>
            <div className={styles.links}>
              <Image 
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg" 
                width={24} 
                height={24} 
                alt="typescript"
              />
              <span>Typescript</span>
            </div>
          </div>
        </div>
        
      </Card>
      
      <Card title={projects('calendar.name')} date={projects('calendar.date')} name="calendar">
        <p>
        {projects('calendar.content')}
        </p>

        <div className={styles.bottomInfoContainer}>
          <div>
            <div className={styles.links}>
              <FiGithub/>
              <a href="https://github.com/Joao-mello-ferrari/calendar_in_C" target="_blank" rel="noreferrer">
              {projects('git')}
              </a>
            </div>
            <div className={styles.links}>
              <FiYoutube/> 
              <a href="https://www.youtube.com/watch?v=YMRyCEeKgnw" target="_blank" rel="noreferrer">
              {projects('youtube')} 
              </a>
            </div>
          </div>
          <div className={styles.techs}>
            <div className={styles.links}>
              <Image 
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-plain.svg" 
                width={24} 
                height={24} 
                alt="C language"
              />
              <span>C</span>
            </div>
          </div>
        </div>
      </Card>

      <Card title={projects('navy.name')} date={projects('navy.date')} name="black navy war">
        <p>
        {projects('navy.content_1')}&nbsp;
          <a href="https://www.clickjogos.com.br/Jogos-online/Acao-e-Aventura/Black-Navy-War" target="_blank" rel="noreferrer">
          {projects('navy.link_1')}
          </a> 
          {projects('navy.content_2')}
        </p>

        <div className={styles.bottomInfoContainer}>
          <div>
            <div className={styles.links}>
              <FiGithub/>
              <a href="https://github.com/Joao-mello-ferrari/black-navy-war-game" target="_blank" rel="noreferrer">
              {projects('git')} 
              </a>
            </div>
            <div className={styles.links}>
              <FiYoutube/> 
              <a href="https://www.youtube.com/watch?v=X_AHrosOZIc" target="_blank" rel="noreferrer">
              {projects('navy.youtube')}
              </a>
            </div>
          </div>
          <div className={styles.techs}>
            <div className={styles.links}>
              <Image 
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" 
                width={24} 
                height={24} 
                alt="python"
              />
              <span>Python</span>
            </div>
          </div>
        </div>
      </Card>

      <Card title={projects('dino.name')} date={projects('dino.date')} name="chrome dino">
        <p>
          {projects('dino.content_1')}&nbsp;
          <a href="https://chromedino.com/" target="_blank" rel="noreferrer">
          {projects('dino.link_1')}
          </a> 
          {projects('dino.content_2')}
        </p>

        <div className={styles.bottomInfoContainer}>
          <div>
            <div className={styles.links}>
              <FiGithub/>
              <a href="https://github.com/Joao-mello-ferrari/chrome-dino-game" target="_blank" rel="noreferrer">
              {projects('git')}
              </a>
            </div>
            <div className={styles.links}>
              <FiYoutube/> 
              <a href="https://www.youtube.com/watch?v=UwLFO1Di3Bg" target="_blank" rel="noreferrer">
              {projects('youtube')}
              </a>
            </div>
          </div>
          <div className={styles.techs}>
            <div className={styles.links}>
              <Image 
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" 
                width={24} 
                height={24} 
                alt="python"
              />
              <span>Python</span>
            </div>
          </div>
        </div>
      </Card>

      <Card title={projects('tcc.name')} date={projects('tcc.date')} name="tcc">
        <p>
        {projects('tcc.content')}
        </p>

        <div className={styles.bottomInfoContainer}>
          <div>
            <div className={styles.links}>
              <FiGithub/>
              <a href="https://github.com/Joao-mello-ferrari/mappingGraph" target="_blank" rel="noreferrer">
              {projects('git')}
              </a>
            </div>
            <div className={styles.links}>
              <FiYoutube/> 
              <a href="https://youtu.be/0nOX7tfUSJU" target="_blank" rel="noreferrer">
              {projects('youtube')}
              </a>
            </div>
          </div>
          <div className={styles.techs}>
            <div className={styles.links}>
              <Image 
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" 
                width={24} 
                height={24} 
                alt="nextjs"
              />
              <span>Next.js</span>
            </div>
            <div className={styles.links}>
              <Image 
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg" 
                width={24} 
                height={24} 
                alt="typescript"
              />
              <span>Typescript</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}