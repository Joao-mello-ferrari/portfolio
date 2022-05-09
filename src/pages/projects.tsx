import { useEffect } from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { useLocale } from '../contexts/locale';

import { Header } from '../components/Header'
import { SidebarDrawer } from '../components/MobileSidebar'
import { Projects as ProjectsModule } from '../modules/Projects'
import { Footer } from '../components/Footer'

import styles from '../styles/Home.module.scss'

type ProjectsProps={ locale: string }

export default function Projects({ locale }: ProjectsProps){
  const { setLocale } = useLocale();

  useEffect(()=>{
    setLocale(locale);
  },[locale, setLocale]);

  return(
    <div className={styles.container}>
      <Header locale={locale}/>
      <SidebarDrawer locale={locale}/>
      <ProjectsModule />
      <Footer/>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async({ locale }) => {
  return {
    props: {
      locale: locale || 'pt',
      ...(await serverSideTranslations(
        locale || 'pt', 
        ['common', 'projects']
      )),
      // Will be passed to the page component as props
    },
  };
}