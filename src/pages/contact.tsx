import { useEffect } from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';

import { useLocale } from '../contexts/locale';

import { Contact as ContactModule } from '../modules/Contact'

const Header = dynamic(() => 
  import('../components/Header').then((mod) => mod.Header), 
  { ssr: false }
);

const SidebarDrawer = dynamic(() => 
  import('../components/MobileSidebar').then((mod) => mod.SidebarDrawer), 
  { ssr: false }
);

import styles from '../styles/Home.module.scss'

type ContactProps={ locale: string }
  
export default function Contact({ locale }: ContactProps){
  const { setLocale } = useLocale();

  useEffect(()=>{
    setLocale(locale);
  },[locale, setLocale]);

  return(
    <div className={styles.container}>
      <Header locale={locale}/>
      <SidebarDrawer locale={locale}/>
      <ContactModule />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async({ locale }) => {
  return {
    props: {
      locale: locale || 'pt',
      ...(await serverSideTranslations(
        locale || 'pt', 
        ['common', 'contact']
      )),
      // Will be passed to the page component as props
    },
  };
}