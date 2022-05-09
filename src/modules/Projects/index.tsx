import { useTranslation } from 'next-i18next';

import { Link } from '../../components/Links';
import { Card } from './Card'
import { FiGithub, FiGlobe, FiYoutube } from "react-icons/fi";

import { Next, Typescript, Python, C } from '../../components/Techs'
import { Git, Online, Youtube } from '../../components/ProjectsWebsites'

import styles from './Projects.module.scss'
import Image from 'next/image';

export function Projects(){
  const { t: projects } = useTranslation('projects');

  return(
    <div className={styles.container}>
      <Card title={projects('eforecast.name')} date={projects('eforecast.date')} name="eforecast">
        <p>
          {projects('eforecast.content_1')}
          <Link
            to="https://openweathermap.org/"
            content={projects('eforecast.link_1')}
          />
          &nbsp;
          {projects('eforecast.content_2')}
        </p>

        <div className={styles.bottomInfoContainer}>
          <div>
            <Git url="https://github.com/Joao-mello-ferrari/e.forecast"/>
            <Online url="https://eforecast.joaomellof.com/"/>
          </div>
          <div className={styles.techs}>
            <Next/>
            <Typescript/>
          </div>
        </div>
      </Card>

      <Card title={projects('elearning.name')} date={projects('elearning.date')} name="elearning">
        <p>{projects('elearning.content')}</p>
        
        <div className={styles.bottomInfoContainer}>
          <div>
            <Git url="https://github.com/Joao-mello-ferrari/e.learning_frontend"/>
            <Online url="https://elearning.joaomellof.com"/>
          </div>
          <div className={styles.techs}>
            <Next/>
            <Typescript/>
          </div>
        </div>
      </Card>
      
      <Card title={projects('calendar.name')} date={projects('calendar.date')} name="calendar">
        <p>{projects('calendar.content')}</p>

        <div className={styles.bottomInfoContainer}>
          <div>
            <Git url="https://github.com/Joao-mello-ferrari/calendar_in_C"/>
            <Youtube url="https://www.youtube.com/watch?v=YMRyCEeKgnw"/>
          </div>
          <div className={styles.techs}>
            <C/>
          </div>
        </div>
      </Card>

      <Card title={projects('navy.name')} date={projects('navy.date')} name="black navy war">
        <p>
          {projects('navy.content_1')}
          <Link
            to="https://www.clickjogos.com.br/Jogos-online/Acao-e-Aventura/Black-Navy-War"
            content={projects('navy.link_1')}
          />
          {projects('navy.content_2')}
        </p>

        <div className={styles.bottomInfoContainer}>
          <div>
            <Git url="https://github.com/Joao-mello-ferrari/black-navy-war-game"/>
            <Youtube url="https://www.youtube.com/watch?v=X_AHrosOZIc"/>
          </div>
          <div className={styles.techs}>
            <Python/>
          </div>
        </div>
      </Card>

      <Card title={projects('dino.name')} date={projects('dino.date')} name="chrome dino">
        <p>
          {projects('dino.content_1')}
          <Link
            to="https://chromedino.com/"
            content={projects('dino.link_1')}
          />
          {projects('dino.content_2')}
        </p>

        <div className={styles.bottomInfoContainer}>
          <div>
            <Git url="https://github.com/Joao-mello-ferrari/chrome-dino-game"/>
            <Youtube url="https://www.youtube.com/watch?v=UwLFO1Di3Bg"/>
          </div>
          <div className={styles.techs}>
            <Python/>
          </div>
        </div>
      </Card>

      <Card title={projects('tcc.name')} date={projects('tcc.date')} name="tcc">
        <p>{projects('tcc.content')}</p>

        <div className={styles.bottomInfoContainer}>
          <div>
            <Git url="https://github.com/Joao-mello-ferrari/mappingGraph"/>
            <Youtube url="https://youtu.be/0nOX7tfUSJU"/>
          </div>
          <div className={styles.techs}>
            <Next/>
            <Typescript/>
          </div>
        </div>
      </Card>
    </div>
  )
}