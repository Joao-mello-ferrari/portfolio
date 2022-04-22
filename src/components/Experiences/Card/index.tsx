import styles from './Card.module.scss'

export function Card(){
  return(
    <div className={styles.cardContainer}>
      <div className={styles.circle}/>
      <div className={styles.cardContent}>
        <span>August 2021</span>
        <p>I started a new position on&nbsp;
          <a href="https://www.bytejr.com.br/" target="_blank" rel="noreferrer">
            ByteJr
          </a> 
          , as a full stack developer. During the time I`ve spent there, I`ve worked with React (front-end)
          and nodeJS + postgres (back-end).
        </p>
      </div>
    </div>
  )
}