import { useTranslation } from "next-i18next";
import { FiGithub } from "react-icons/fi";
import { Link } from "../Links";

import styles from './Websites.module.scss'

type GitProps={ url: string; }

export function Git({ url }: GitProps){
  const { t: projects } = useTranslation('projects');

  return(
    <div className={styles.links}>
      <FiGithub/>
      <Link
        to={url}
        content={projects('git')} 
        white
      />
    </div>
  )
}