import Router from 'next/router'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'

import styles from './Webnav.module.scss'
import { useEffect, useState } from 'react';

interface LinkProps extends NextLinkProps{
  name: string;
}

export function WebLink({name, href }:LinkProps){
  const [isActive, setIsActive] = useState(false);
 
  useEffect(()=>{
    if(typeof window !== "undefined") setIsActive(Router.asPath.includes(String(href)));
  },[setIsActive, href]);
  

  if(isActive){
    return(
      <NextLink 
        href={href} 
        passHref 
        legacyBehavior
      >
        <a className={styles.webActiveLink}>
          {name}
        </a>
      </NextLink>
    )
  }

  return(
    <NextLink 
      href={href} 
      passHref 
      legacyBehavior
    >
      <a>{name}</a>
    </NextLink> 
  )
}