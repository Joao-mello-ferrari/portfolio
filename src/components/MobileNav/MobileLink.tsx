import Router from 'next/router'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'

import styles from './Mobilenav.module.scss'
import { useEffect, useState } from 'react';
import { useSidebarDrawer } from '../../contexts/sidebarDrawer';

interface LinkProps extends NextLinkProps{
  name: string;
}

export function MobileLink({name, href }:LinkProps){
  const [isActive, setIsActive] = useState(false);
 
  const { onClose } = useSidebarDrawer();

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
        <a className={styles.mobileActiveLink}>
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
      <a onClick={onClose}>{name}</a>
    </NextLink> 
  )
}