import { Card } from './Card'
import { FiGithub, FiGlobe } from "react-icons/fi";

import styles from './Projects.module.scss'

export function Projects(){
  return(
    <div className={styles.container}>
      
      <Card title="e.learning" date="March 2022" name="elearning">
        <p>
          In order to practice and stablish a solid connection with 
          the next.js way of coding, I decided to develop a web 
          application. Still, education is such an amazing area, 
          and creating online tools so people can study in a 
          better way is always nice.
        </p>
        
        <div className={styles.links}>
          <FiGithub/>
          <a href="https://github.com/Joao-mello-ferrari/e.learning_frontend" target="_blank" rel="noreferrer">
            Github repo 
          </a>
        </div>
        <div className={styles.links}>
          <FiGlobe/> 
          <a href="https://6237abede42099088ab7ba6c--thirsty-hawking-4883c2.netlify.app/" target="_blank" rel="noreferrer">
            Project online 
          </a>
        </div>
        
      </Card>
      
      <Card title="e.forecast" date="May 2022" name="eforecast">
        <p>
          One day I was looking for the wether forecast noticed 
          the lack of beutiful forecast websites available on the 
          internet. Therefore, I came across the ideia of a application
          with fancy graphs and a nicier layout, using the&nbsp;
          <a href="https://openweathermap.org/" target="_blank" rel="noreferrer">
            Open Weather Map  
          </a>
          &nbsp;api as data provider.
        </p>

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
        
      </Card>
      
      <Card title="e.learning" date="March 2022" name="elearning">
        <p>
          In order to practice and stablish a solid connection with 
          the next.js way of coding, I decided to develop a web 
          application. Still, education is such an amazing area, 
          and creating online tools so people can study in a 
          better way is always nice.
        </p>

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
        
      </Card>
      <Card title="e.learning" date="March 2022" name="elearning">
        <p>
          In order to practice and stablish a solid connection with 
          the next.js way of coding, I decided to develop a web 
          application. Still, education is such an amazing area, 
          and creating online tools so people can study in a 
          better way is always nice.
        </p>

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
        
      </Card>
      <Card title="e.learning" date="March 2022" name="elearning">
        <p>
          In order to practice and stablish a solid connection with 
          the next.js way of coding, I decided to develop a web 
          application. Still, education is such an amazing area, 
          and creating online tools so people can study in a 
          better way is always nice.
        </p>

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
        
      </Card>
    </div>
    
  )
}