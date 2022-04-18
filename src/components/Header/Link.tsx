import NextLink, { LinkProps as NextLinkProps } from "next/link"
import Router from 'next/router';
import { useEffect, useState } from "react";

import styles from './Header.module.scss'

interface LinkProps extends NextLinkProps{
  name: string;
}

export function Link({ href, name }:LinkProps){
  const [isActive, setIsActive] = useState(false);
  
  useEffect(()=>{
    if (typeof window !== "undefined") {
      const isActiveInUrl = String('/'+href).includes(Router.asPath);
      setIsActive(isActiveInUrl);
      
      window.addEventListener('scroll',(e)=>{
        const section = document.querySelector(String(href));
        if(section){
          const rect = section.getBoundingClientRect();
          const topLimit = window.innerHeight || document.documentElement.clientHeight;
          const bottomLimit = window.innerHeight * 0.125;
          setIsActive(rect.bottom > bottomLimit && rect.top <= topLimit);
        }
        else setIsActive(false);
      });
    }
  },[href]);


  return(
    <NextLink href={href} passHref >
      <a className={ isActive ? styles.activeLink : ''}>
        {name}
      </a>
    </NextLink>
  )
}