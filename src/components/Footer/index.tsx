import styles from './Footer.module.scss'

export function Footer(){
  return(
    <div className={styles.footerContainer}>
      <p className={styles.footerText}>Desenvolvido por @João Mello - Atualizado em 05/2021</p>
    </div>
  )
}