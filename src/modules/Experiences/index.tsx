import { useTranslation } from "next-i18next";

import Image from "next/image";
import { Card } from "./Card";

import { FiBook, FiClock } from "react-icons/fi";

import styles from './Experiences.module.scss'
import cStyles from '../Common.module.scss'

interface ExperiencesProps{
  host: string;
}

export function Experiences({ host }:ExperiencesProps){
  const { t: exp } = useTranslation('experiences');
  
  return(
    <div className={cStyles.container}>
      <section className={styles.timeline}>
      <div className={styles.line}/>
        <div>

          <Card date={exp('obr.date')} name="OBR pratica">
            <div className={styles.obr}>
              <p>{exp('obr.content')}</p>
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

          <Card date={exp('internship.date')} name="Estagio">
            <p>{exp('internship.content_1')}
              <a href="https://www.refinariariograndense.com.br/site/" target="_blank" rel="noreferrer">
              &nbsp;{exp('internship.link_1')}
              </a>
              {exp('internship.content_2')}
            </p>
          </Card>

          <Card date={exp('obr_2.date')} name="OBR teorica">
            <p>{exp('obr_2.content')}
            </p>
            <a href={`http://${host}/certificates/obr`} target="_blank" rel="noreferrer">
            {exp('certificate')}
            </a>
          </Card>

          <Card date={exp('igti.date')} name="IGTI">
            <p>{exp('igti.content')}
            </p>
            <a href={`http://${host}/certificates/igti`} target="_blank" rel="noreferrer">
            {exp('certificate')}
            </a>
          </Card>

          <Card date={exp('asimov.date')} name="ASIMOV">
            <p>{exp('asimov.content_1')}&nbsp;
              <a href="https://www.onshape.com" target="_blank" rel="noreferrer">
              {exp('asimov.link_1')}
              </a> 
              {exp('asimov.content_2')}
            </p>
            <a href={`http://${host}/certificates/asimov`} target="_blank" rel="noreferrer">
            {exp('certificate')}
            </a>
          </Card>

          <Card date={exp('gostack.date')} name="gostack">
            <p>{exp('gostack.content_1')}
            </p>
            <p>{exp('gostack.content_2')}&nbsp;  
              <a href="https://rocketseat.com.br/" target="_blank" rel="noreferrer">
              {exp('gostack.link_1')}
              </a>
              {exp('gostack.content_3')}
            </p>
            <a href={`http://${host}/certificates/gostack`} target="_blank" rel="noreferrer">
            {exp('certificate')}
            </a>
          </Card>

          <Card date={exp('tcc.date')} name="tcc">
            <p>{exp('tcc.content_1')}</p> 
            <p>{exp('tcc.content_2')}&nbsp;
              <a href="https://www.instagram.com/hipnoterapeuta_felipe/" target="_blank" rel="noreferrer">
              {exp('tcc.link_1')}
              </a>   
              &nbsp;{exp('tcc.content_3')}&nbsp; 
              <a href="https://www.instagram.com/rhuszcza/" target="_blank" rel="noreferrer">
              {exp('tcc.link_2')}
              </a>
              {exp('tcc.content_4')}
            </p>
            <p>{exp('tcc.content_5')}
            </p>
            <a href={`http://${host}/certificates/tcc`} target="_blank" rel="noreferrer">
            {exp('tcc.article')}
            </a>
          </Card>

          <Card date={exp('bytejr.date')} name="bytejr">
            <p>{exp('bytejr.content_1')}&nbsp;
              <a href="https://www.bytejr.com.br/" target="_blank" rel="noreferrer">
              {exp('bytejr.link_1')}
              </a> 
              {exp('bytejr.content_2')}
            </p>
          </Card>

          <Card date={exp('dowhile.date')} name="dowhile">
            <p>{exp('dowhile.content_1')}&nbsp;
              <a href="https://rocketseat.com.br/" target="_blank" rel="noreferrer">
              {exp('dowhile.link_1')}
              </a> 
              {exp('dowhile.content_2')}
            </p>
            <p>{exp('dowhile.content_3')}
            </p>
            <a href={`http://${host}/certificates/dowhile`} target="_blank" rel="noreferrer">
            {exp('certificate')}
            </a>
          </Card>
          
          <Card date={exp('itec.date')} name="itec">
            <p>{exp('itec.content_1')}&nbsp;
              <a href="http://itecfurg.org/" target="_blank" rel="noreferrer">
              {exp('itec.link_1')}
              </a> 
              {exp('itec.content_2')}&nbsp; 
              <a href="http://www.aurosrobotics.com/" target="_blank" rel="noreferrer">
              {exp('itec.link_2')}
              </a>
              {exp('itec.content_3')}
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

