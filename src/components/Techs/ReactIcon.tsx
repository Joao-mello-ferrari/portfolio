import Image from "next/image";

import styles from './Techs.module.scss'

export function ReactIcon(){
  return(
    <div className={styles.links}>
      <Image
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" 
        width={24} 
        height={24} 
        alt="nextjs"
      />
      <span>React</span>
    </div>
  )
}