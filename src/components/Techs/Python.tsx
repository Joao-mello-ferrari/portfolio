import Image from "next/image";

import styles from './Techs.module.scss'

export function Python(){
  return(
    <div className={styles.links}>
      <Image 
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" 
        width={24} 
        height={24} 
        alt="python"
      />
      <span>Python</span>
    </div>
  )
}