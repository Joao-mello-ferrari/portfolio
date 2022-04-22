import { GetServerSideProps } from 'next'
import { Experiences as ExperiencesComponent } from '../components/Experiences'
import { Header } from '../components/Header'

import styles from '../styles/Home.module.scss'

interface ExperiencesProps{
  host: string;
}

export default function About({ host }: ExperiencesProps){
 
  return (
    <div className={styles.container}>
      <Header/>
      <ExperiencesComponent
        host={host}
      />
      
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async(req) =>{
  const host = req?.req?.headers?.host;
  
  return{
    props:{
      host
    }
  }
}
