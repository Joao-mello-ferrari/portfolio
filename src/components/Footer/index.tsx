import { useTranslation } from 'next-i18next';
import styles from './Footer.module.scss'

export function Footer(){
  const { t: common } = useTranslation('common');

  return(
    <div className={styles.footerContainer}>
      <p className={styles.footerText}>{common('footer')}</p>
    </div>
  )
}