import { useTranslation } from "next-i18next";
import { FiYoutube } from "react-icons/fi";
import { Link } from "../Links";

import styles from './Websites.module.scss'

type YoutubeProps={ url: string; }

export function Youtube({ url }: YoutubeProps){
  const { t: projects } = useTranslation('projects');

  return(
    <div className={styles.links}>
      <div className={styles.links}>
        <FiYoutube/> 
        <Link
          to={url}
          content={projects('youtube')}
          white
        />
      </div>
    </div>
  )
}