import Router from 'next/router'
import { FiArrowLeftCircle } from 'react-icons/fi';

import cStyles from '../styles/Home.module.scss'
import styles from '../styles/404.module.scss'

export default function Custom404() {

  return(
    <div className={`${cStyles.container} ${styles.main}`}>
      <div className={styles.content}>
        <h1 className={styles.mainText}>
          Opps... Parece que você se perdeu!
        </h1>
        <div className={styles.text}>
          <h2>Volte para a página inicial clicando ao lado</h2>
          <FiArrowLeftCircle onClick={()=>{ Router.push('/about')}}/>
        </div>
      </div>
    </div>
  )
}


