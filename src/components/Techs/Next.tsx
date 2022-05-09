import Image from "next/image";

import styles from './Techs.module.scss'

export function Next(){
  return(
    <div className={styles.links}>
      <Image
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" 
        width={24} 
        height={24} 
        alt="nextjs"
      />
      <span>Next.js</span>
    </div>
  )
}