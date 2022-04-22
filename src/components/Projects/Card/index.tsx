import { FiClock } from "react-icons/fi";

import styles from './Card.module.scss'

interface CardProps{
  name?: string;
  title: string;
  date: string;
  children: React.ReactNode;
}

export function Card({ title, date, children }:CardProps){
  return(
    <div className={styles.cardContainer}>
      <div className={styles.mainInfo}>
        <span className={styles.info}>{title}</span>
        <div className={styles.dateContainer}>
          <FiClock/>
          <span className={styles.info}>{date}</span>
        </div>
      </div>
      { children }
    </div>
  )
}