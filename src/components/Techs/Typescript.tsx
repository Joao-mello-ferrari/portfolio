import Image from "next/image";

import styles from './Techs.module.scss'

export function Typescript(){
  return(
    <div className={styles.links}>
      <Image 
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg" 
        width={24} 
        height={24} 
        alt="typescript"
      />
      <span>Typescript</span>
    </div>
  )
}