import Router from 'next/router';
import { useLocale } from '../../contexts/locale';

import Image from 'next/image'
import { Switch } from '@chakra-ui/react'

import styles from './Switch.module.scss'

type LanguageSwitchProps={ hoclass?: string| string[]; locale: string; }

export function LanguageSwitch({ hoclass='', locale: defLoc }: LanguageSwitchProps){
  const { locale } = useLocale();

  const handleLanguageChange = () =>{
    const { asPath: url, locale: loc} = Router;
    const locale = loc === 'pt' ? 'en' : 'pt';
    Router.push(url, url, { locale });
  }
  
  return(
    <div className={`${styles.switchContainer} ${hoclass}`}>
      <Switch 
        isChecked={defLoc === 'en'}
        id='language' 
        onChange={handleLanguageChange} 
        colorScheme="orange"
        size="lg"
        outline="none"
        _focus={{boxShadow: 'none!important'}}
      />
      <Image 
        src={`https://countryflagsapi.com/png/${locale === 'pt' ? 'br' : 'us'}`}
        alt='flag'
        width={24}
        height={16}
        className={styles.lang}
      />          
    </div>
  )
}