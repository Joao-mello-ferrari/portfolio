import { Card } from './Card'
import { FiGithub, FiGlobe, FiYoutube } from "react-icons/fi";

import styles from './Projects.module.scss'
import Image from 'next/image';

export function Projects(){
  return(
    <div className={styles.container}>
      <Card title="e.forecast" date="May 2022" name="eforecast">
        <p>
          One day I was looking for the wether forecast noticed 
          the lack of beutiful forecast websites available on the 
          internet. Therefore, I came across the ideia of an application
          with fancy graphs and a nicier layout, using the&nbsp;
          <a href="https://openweathermap.org/" target="_blank" rel="noreferrer">
            Open Weather Map  
          </a>
          &nbsp;api as data provider.
        </p>

        <div className={styles.bottomInfoContainer}>
          <div>
            <div className={styles.links}>
              <FiGithub/>
              <a href="https://github.com/Joao-mello-ferrari/e.forecast" target="_blank" rel="noreferrer">
                Github repo 
              </a>
            </div>
            <div className={styles.links}>
              <FiGlobe/> 
              <a href="https://illustrious-cajeta-9465bc.netlify.app/" target="_blank" rel="noreferrer">
                Project online 
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

      <Card title="e.learning" date="March 2022" name="elearning">
        <p>
          In order to practice and stablish a solid connection with 
          the next.js way of coding, I decided to develop a web 
          application. Still, education is such an amazing area, 
          and creating online tools so people can study in a 
          better way is always nice.
        </p>
        
        <div className={styles.bottomInfoContainer}>
          <div>
            <div className={styles.links}>
              <FiGithub/>
              <a href="https://github.com/Joao-mello-ferrari/e.learning_frontend" target="_blank" rel="noreferrer">
                Github repo 
              </a>
            </div>
            <div className={styles.links}>
              <FiGlobe/> 
              <a href={`https://6237abede42099088ab7ba6c--thirsty-hawking-4883c2.netlify.app/`} target="_blank" rel="noreferrer">
                Project online 
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
      
      <Card title="Calendar" date="February 2022" name="calendar">
        <p>
        The idea of this project is to mock a calendar application, in which the user can register, retrieve and delete events.
        The interface is the computer terminal, and all of the magic happens there.
        </p>

        <div className={styles.bottomInfoContainer}>
          <div>
            <div className={styles.links}>
              <FiGithub/>
              <a href="https://github.com/Joao-mello-ferrari/calendar_in_C" target="_blank" rel="noreferrer">
                Github repo 
              </a>
            </div>
            <div className={styles.links}>
              <FiYoutube/> 
              <a href="https://www.youtube.com/watch?v=YMRyCEeKgnw" target="_blank" rel="noreferrer">
                YouTube video 
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

      <Card title="Black Navy War" date="January 2022" name="black navy war">
        <p>
          This is a beta version of the&nbsp;
          <a href="https://www.clickjogos.com.br/Jogos-online/Acao-e-Aventura/Black-Navy-War" target="_blank" rel="noreferrer">
            Black Navy War
          </a> 
          &nbsp; game. This time, I focused on creating a more difficult game,
          with plenty of features.
        </p>

        <div className={styles.bottomInfoContainer}>
          <div>
            <div className={styles.links}>
              <FiGithub/>
              <a href="https://github.com/Joao-mello-ferrari/black-navy-war-game" target="_blank" rel="noreferrer">
                Github repo 
              </a>
            </div>
            <div className={styles.links}>
              <FiYoutube/> 
              <a href="https://www.youtube.com/watch?v=X_AHrosOZIc" target="_blank" rel="noreferrer">
                YouTube video 
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

      <Card title="Chrome Dino" date="November 2021" name="chrome dino">
        <p>
          This is a beta version of the&nbsp;
          <a href="https://chromedino.com/" target="_blank" rel="noreferrer">
            Chrome Dino game
          </a> 
          .&nbsp;The idea of this project was to developed skills with games, that don&apos;t
          necessarily run on web.
        </p>

        <div className={styles.bottomInfoContainer}>
          <div>
            <div className={styles.links}>
              <FiGithub/>
              <a href="https://github.com/Joao-mello-ferrari/chrome-dino-game" target="_blank" rel="noreferrer">
                Github repo 
              </a>
            </div>
            <div className={styles.links}>
              <FiYoutube/> 
              <a href="https://www.youtube.com/watch?v=UwLFO1Di3Bg" target="_blank" rel="noreferrer">
                YouTube video 
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

      <Card title="Mapping graph" date="September 2021" name="tcc">
        <p>
          Graph software developed for my high shool final paper.
          It&apos;s purpose is to display the 2D mapping performed by a LiDAR sensor.
        </p>

        <div className={styles.bottomInfoContainer}>
          <div>
            <div className={styles.links}>
              <FiGithub/>
              <a href="https://github.com/Joao-mello-ferrari/mappingGraph" target="_blank" rel="noreferrer">
                Github repo 
              </a>
            </div>
            <div className={styles.links}>
              <FiYoutube/> 
              <a href="https://youtu.be/0nOX7tfUSJU" target="_blank" rel="noreferrer">
                YouTube video
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