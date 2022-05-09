interface LinkProps{
  to: string;
  content: string;
  white?: boolean;
  space?: boolean
}

import styles from './Link.module.scss'

export function Link({ to, content, white=false, space=true }: LinkProps){
  if(white){
    return(
      <a 
        className={styles.white}
        href={to} 
        target="_blank" 
        rel="noreferrer"
      >
        {content}
      </a>
    )
  }

  return(
    <>
      {space ? <span>&nbsp;</span> : ''}
      <a 
        className={styles.orange} 
        href={to} 
        target="_blank" 
        rel="noreferrer"
      >
        {content}
      </a>
    </>
  )
}