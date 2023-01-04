import { useTranslation } from "next-i18next";

import Image from "next/image";
import { Card } from "./Card";
import { Link } from '../../components/Links'

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
            <Link
              to="https://www.refinariariograndense.com.br/site/"
              content={exp('internship.link_1')}
            />
            {exp('internship.content_2')}
            </p>
          </Card>

          <Card date={exp('obr_2.date')} name="OBR teorica">
            <p>{exp('obr_2.content')}</p>
            <Link
              to={`https://${host}/certificates/obr`}
              content={exp('certificate')}
              space={false}
            />
          </Card>

          <Card date={exp('igti.date')} name="IGTI">
            <p>{exp('igti.content')}</p>
            <Link
              to={`https://${host}/certificates/igti`}
              content={exp('certificate')}
              space={false}
            />
          </Card>

          <Card date={exp('asimov.date')} name="ASIMOV">
            <p>
              {exp('asimov.content_1')}
              <Link
                to="https://www.onshape.com"
                content={exp('asimov.link_1')}
              />
              {exp('asimov.content_2')}
            </p>
            <Link
              to={`https://${host}/certificates/asimov`}
              content={exp('certificate')}
              space={false}
            />
          </Card>

          <Card date={exp('gostack.date')} name="gostack">
            <p>{exp('gostack.content_1')}</p>
            <p>
              {exp('gostack.content_2')}
              <Link
                to="https://rocketseat.com.br/"
                content={exp('gostack.link_1')}
              />  
              {exp('gostack.content_3')}
            </p>
            <Link
              to={`https://${host}/certificates/gostack`}
              content={exp('certificate')}
              space={false}
            />
          </Card>

          <Card date={exp('tcc.date')} name="tcc">
            <p>{exp('tcc.content_1')}</p> 
            <p>
              {exp('tcc.content_2')}
              <Link
                to="https://www.instagram.com/hipnoterapeuta_felipe/"
                content={exp('tcc.link_1')}
              />
              &nbsp;{exp('tcc.content_3')}
              <Link
                to="https://github.com/RafaelHuszcza"
                content={exp('tcc.link_2')}
              />
              {exp('tcc.content_4')}
            </p>
            <p>{exp('tcc.content_5')}</p>
            <Link
              to={`https://${host}/certificates/tcc`}
              content={exp('tcc.article')}
              space={false}
            />
          </Card>

          <Card date={exp('bytejr.date')} name="bytejr">
            <p>
              {exp('bytejr.content_1')}
              <Link
                to="https://www.bytejr.com.br/"
                content={exp('bytejr.link_1')}
              />
              {exp('bytejr.content_2')}
              &nbsp;
              {exp('bytejr.content_3')}
              <Link
                to="https://www.wilsonsons.com.br/en/rio-grande-container-terminal/"
                content={exp('bytejr.link_2')}
              />
              &nbsp;{exp('bytejr.content_4')}
              <Link
                to="https://www.acqualogic.com.br/"
                content={exp('bytejr.link_3')}
              />
              .
            </p>
          </Card>

          <Card date={exp('dowhile.date')} name="dowhile">
            <p>
              {exp('dowhile.content_1')}
              <Link
                to="https://rocketseat.com.br/"
                content={exp('dowhile.link_1')}
              />
              {exp('dowhile.content_2')}
            </p>
            <p>{exp('dowhile.content_3')}</p>
            <Link
              to={`https://${host}/certificates/dowhile`}
              content={exp('certificate')}
              space={false}
            />
          </Card>
          
          <Card date={exp('itec.date')} name="itec">
            <p>
              {exp('itec.content_1')}
              <Link
                to="http://itecfurg.org/"
                content={exp('itec.link_1')}
              />
              {exp('itec.content_2')}
              <Link
                to="https://www.aurosrobotics.com/"
                content={exp('itec.link_2')}
              />
              {exp('itec.content_3')}
            </p>
            <p>
              {exp('itec.content_4')}
              <Link
                to={`https://${host}/certificates/itec-paper`}
                content={exp('itec.link_3')}
                space={false}
              />
            </p>
          </Card>

          <Card date={exp('dowhile2.date')} name="dowhile2">
            <p>{exp('dowhile2.content_1')}</p>
          </Card>

          <Card date={exp('ignite.date')} name="ignite">
            <p>{exp('ignite.content_1')}</p>
            <Link
              to={`https://${host}/certificates/ignite`}
              content={exp('certificate')}
            />
          </Card>

          <Card date={exp('bytejr2.date')} name="bytejr2">
            <p>
              {exp('bytejr2.content_1')}
              {exp('bytejr2.content_2')}
              <Link
                to={`https://${host}/certificates/fejers`}
                content={exp('bytejr2.link_1')}
                space={false}
              />
            </p>
            <Link
              to={`https://${host}/certificates/bytejr`}
              content={exp('bytejr2.link_2')}
            />
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

