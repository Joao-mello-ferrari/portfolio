import Image from "next/image";

import styles from './Techs.module.scss'

export function C(){
  return(
    <div className={styles.links}>
      <Image 
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-plain.svg" 
        width={24} 
        height={24} 
        alt="C language"
      />
      <span>C</span>
    </div>
  )
}