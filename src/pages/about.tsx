import { useEffect } from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';

import { useLocale } from '../contexts/locale';

import { About as AboutModule } from '../modules/About'
import { Footer } from '../components/Footer'

import styles from '../styles/Home.module.scss'


const Header = dynamic(() => 
  import('../components/Header').then((mod) => mod.Header), 
  { ssr: false }
);

const SidebarDrawer = dynamic(() => 
  import('../components/MobileSidebar').then((mod) => mod.SidebarDrawer), 
  { ssr: false }
);

type AboutProps={ locale: string }

export default function About({ locale }: AboutProps){
  const { setLocale } = useLocale();

  useEffect(()=>{
    setLocale(locale);
  },[locale, setLocale]);

  return (
    <div className={styles.container}>
      <Header locale={locale}/>
      <SidebarDrawer locale={locale}/>
      <AboutModule />
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
        ['common', 'about']
      )),
      // Will be passed to the page component as props
    },
  };
}
