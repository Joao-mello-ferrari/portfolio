import { FiSun, FiMoon } from 'react-icons/fi';

import styles from './Theme.module.scss'

interface ThemeProps{
  action: (theme: 'light' | 'dark') => void;
  theme: 'light' | 'dark';
  hoclass?: string;
}


export function Theme({ action, theme, hoclass='' }: ThemeProps){
  if(theme === 'dark'){
    return(
      <FiMoon 
        className={`${styles.theme} ${hoclass}`}
        onClick={() => action('light')}
      />
    )
  }

  return(
    <FiSun 
      className={`${styles.theme} ${hoclass}`}
      onClick={() => action('dark')}
    />
  )
}