import Image from "next/image";
import { Card } from "./Card";

import { FiBook, FiClock } from "react-icons/fi";

import styles from './Experiences.module.scss'

export function Experiences(){
  return(
    <div className={styles.container}>
      <section className={styles.timeline}>
      <div className={styles.line}/>
        <div>
          <Card

          />
          <Card

          />
          <Card

          />
        </div>
      {/* <div>
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
          <p>
          intership in&nbsp; 
            <a href="https://www.refinariariograndense.com.br/site/" target="_blank" rel="noreferrer">
              Refinaria de Petróleo Riograndense
            </a>
            , on the instrumentation area.</p>
        </div> */}
        
      </section>
      <section className={styles.iconsContainer}>
        <FiClock className={styles.clock}/>
        <div className={styles.cap}/>
        <FiBook className={styles.book}/>
      </section>
    </div>
  )
}