import Image from "next/image";
import { Card } from "./Card";

import { FiBook, FiClock } from "react-icons/fi";

import styles from './Experiences.module.scss'
import cStyles from '../Common.module.scss'

interface ExperiencesProps{
  host: string;
}

export function Experiences({ host }:ExperiencesProps){
  return(
    <div className={cStyles.container}>
      <section className={styles.timeline}>
      <div className={styles.line}/>
        <div>

          <Card date="August 2019" name="OBR pratica">
            <div className={styles.obr}>
              <p>I participated in the OBR (Olimpíada Brasileira de Robótica).
                The goal of the competition was to develop autonomous robots and complete the applied challenges.
              </p>
              <div>
                <Image
                  src="/assets/asimov.jpg"
                  width={200}
                  height={160}
                  alt="robot"
                />
              </div>
            </div>
          </Card>

          <Card date="September - November 2019" name="Estagio">
            <p>I enrolled in an intership&nbsp;
              <a href="https://www.refinariariograndense.com.br/site/" target="_blank" rel="noreferrer">
                Refinaria de Petróleo Riograndense
              </a>
              . During those 3 months, I was able to lern much about instrumentation, by fixing devices such
              as manometers and programming in the Delta-V software.
            </p>
          </Card>

          <Card date="September 2019" name="OBR teorica">
            <p>I participated in the OBR for a second time, but now for a theorical test.
              The goal was to answer questions about robotics in general, and fortunately I was able
              to achive a high rank, which granted me a gold medal.
            </p>
            <a href={`http://${host}/certificates/obr`} target="_blank" rel="noreferrer">
              Certificate here
            </a>
          </Card>

          <Card date="August 2020" name="IGTI">
            <p>I finished my first full stack web course, in the IGTI institute.
              This is where all my passion for web development started.
              Here I learned the web fundamentals, but already managed to create some applications.
            </p>
            <a href={`http://${host}/certificates/igti`} target="_blank" rel="noreferrer">
              Certificate here
            </a>
          </Card>

          <Card date="August 2020 - March 2021" name="ASIMOV">
            <p>I participed in the ASiMov project, which allowed me to experience
              how the base os robotics was, back in the day.
              Our goal was to build autonomous robots pretty much from scratch, by using
              3D design softwares (such as&nbsp;
              <a href="https://www.onshape.com" target="_blank" rel="noreferrer">
                onShape
              </a> 
              ) and Arduino/ESP 32 boards with C++ language.
            </p>
            <a href={`http://${host}/certificates/asimov`} target="_blank" rel="noreferrer">
              Certificate here
            </a>
          </Card>

          <Card date="November 2020" name="gostack">
            <p>Now is when things started to get intense, regarding to web development.
              For my 19th anniversary, I asked my father to gift me with a longer web development course.
            </p>
            <p>The insitute was&nbsp;  
              <a href="https://rocketseat.com.br/" target="_blank" rel="noreferrer">
                Rocketseat
              </a>
              , and since then I have not lost a single oportybity to learn with them.
              This time, I learned not only to develop simple applications, 
              but also complex systems and how to deploy them all.
            </p>
            <a href={`http://${host}/certificates/gostack`} target="_blank" rel="noreferrer">
              Certificate here
            </a>
          </Card>

          <Card date="November 2021" name="tcc">
            <p>Since my highschool degree is also for Automation Technician, 
              I had to produce a final paper, which would represent my aknowledge 
              of the technical subject.
            </p> 
            <p>I got together with two mates to do so,&nbsp;
              <a href="https://www.instagram.com/hipnoterapeuta_felipe/" target="_blank" rel="noreferrer">
                Felipe Machado
              </a>   
              &nbsp;and&nbsp; 
              <a href="https://www.instagram.com/rhuszcza/" target="_blank" rel="noreferrer">
              Rafael Machado
              </a>
              . Our project consisted in a LiDAR sensor, which scans small ambients in 2D.
            </p>
            <p>In order to visualize the data collected by the sensor, a graph software was build.
              In a nutshell, the interface was a website built with react, whose function was to receive
              the current data and plot it as a radar graph.
            </p>
            <a href={`http://${host}/certificates/tcc`} target="_blank" rel="noreferrer">
              Check our article out!
            </a>
          </Card>

          <Card date="August 2021" name="bytejr">
            <p>I started a new position on&nbsp;
              <a href="https://www.bytejr.com.br/" target="_blank" rel="noreferrer">
                ByteJr
              </a> 
              , as a full stack developer. During the time I`ve spent there, I`ve worked with React (front-end)
              and nodeJS + postgres (back-end).
            </p>
          </Card>

          <Card date="December 2021" name="dowhile">
            <p>I participated in a tech event, hosted by&nbsp;
              <a href="https://rocketseat.com.br/" target="_blank" rel="noreferrer">
                Rocketseat
              </a> 
              . During days 1 and 2, I was able to watch speeches about programming languages,
              new methodologies, and get in touch with new people.
            </p>
            <p>Probably the strongest thing about this event was to comprehend how 
              huge, diverse and united our tech ecosystem is.
            </p>
            <a href={`http://${host}/certificates/dowhile`} target="_blank" rel="noreferrer">
              Certificate here
            </a>
          </Card>
          
          <Card date="April 2022" name="itec">
            <p>I had the pleasure of being applied to an university scholarship.
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
          </Card>
        </div>
      
      </section>
      <section className={styles.iconsContainer}>
        <FiClock className={styles.clock}/>
        <div className={styles.cap}/>
        <FiBook className={styles.book}/>
      </section>
    </div>
  )
}

