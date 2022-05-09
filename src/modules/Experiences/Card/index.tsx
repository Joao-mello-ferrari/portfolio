import styles from './Card.module.scss'

interface CardProps{
  name?: string;
  date: string;
  children: React.ReactNode;
}

export function Card({ date, children }:CardProps){
  return(
    <div className={styles.cardContainer}>
      <div className={styles.circle}/>
      <div className={styles.cardContent}>
        <span className={styles.date}>{date}</span>
        { children }
      </div>
    </div>
  )
}