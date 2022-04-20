import Router from 'next/router'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'

import styles from './Header.module.scss'
import { useEffect, useState } from 'react';

interface LinkProps extends NextLinkProps{
  name: string;
}

export function Link({name, href }:LinkProps){
  const [isActive, setIsActive] = useState(false);
 
  useEffect(()=>{
    if(typeof window !== "undefined") setIsActive(Router.asPath.includes(String(href)));
  },[setIsActive, href]);
  

  if(isActive){
    return(
      <NextLink 
        href={href} 
        passHref 
      >
        <a className={styles.activeLink}>
          {name}
        </a>
      </NextLink>
    )
  }

  return(
    <NextLink 
      href={href} 
      passHref 
    >
      <a>{name}</a>
    </NextLink> 
  )
}