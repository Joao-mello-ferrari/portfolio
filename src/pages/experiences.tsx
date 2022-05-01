import { GetServerSideProps } from 'next'
import { Header } from '../components/Header'
import { SidebarDrawer } from '../components/MobileSidebar';
import { Experiences as ExperiencesModule } from '../modules/Experiences'
import { Footer } from '../components/Footer';

import styles from '../styles/Home.module.scss'

interface ExperiencesProps{
  host: string;
}

export default function About({ host }: ExperiencesProps){
 
  return (
    <div className={styles.container}>
      <Header/>
      <SidebarDrawer/>
      <ExperiencesModule host={host}/>
      <Footer/>
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
