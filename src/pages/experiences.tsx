import { useEffect } from 'react';
import { GetServerSideProps, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { useLocale } from '../contexts/locale';

import { Header } from '../components/Header'
import { SidebarDrawer } from '../components/MobileSidebar'
import { Experiences as ExperiencesModule } from '../modules/Experiences'
import { Footer } from '../components/Footer'

import styles from '../styles/Home.module.scss'

type ExperiencesProps={
  host: string;
  locale: string;
}

export default function About({ host, locale }: ExperiencesProps){
  const { setLocale } = useLocale();

  useEffect(()=>{
    setLocale(locale);
  },[locale, setLocale]);
  
  return (
    <div className={styles.container}>
      <Header locale={locale}/>
      <SidebarDrawer locale={locale}/>
      <ExperiencesModule host={host}/>
      <Footer/>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async({ req, locale }) => {
  return {
    props: {
      host: req?.headers?.host,
      locale: locale || 'pt',
      ...(await serverSideTranslations(
        locale || 'pt', 
        ['common', 'experiences']
      )),
      // Will be passed to the page component as props
    },
  };
}