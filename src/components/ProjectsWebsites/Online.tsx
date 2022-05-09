import { useTranslation } from "next-i18next";
import { FiGlobe } from "react-icons/fi";
import { Link } from "../Links";

import styles from './Websites.module.scss'

type OnlineProps={ url: string; }

export function Online({ url }: OnlineProps){
  const { t: projects } = useTranslation('projects');

  return(
    <div className={styles.links}>
      <FiGlobe/> 
      <Link
        to={url}
        content={projects('online')} 
        white
      />
    </div>
  )
}