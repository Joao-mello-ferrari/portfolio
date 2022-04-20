import Router from 'next/router';
import { useEffect, useState } from "react";

import styles from './Header.module.scss'

interface LinkProps{
  name: string;
  href: string;
}

export function Link({name, href }:LinkProps){
  const [isActive, setIsActive] = useState(false);
  
  useEffect(()=>{
    if (typeof window !== "undefined") {
      const isActiveInUrl = String('/'+href).includes(Router.asPath);
      setIsActive(isActiveInUrl);
      console.log(isActiveInUrl)
      
      window.addEventListener('scroll',(e)=>{
        const section = document.querySelector(String(href));
        // if(href=== '#about') console.log(e.)
        if(section){
          const { top, bottom } = section.getBoundingClientRect();
          const topLimit = (window.innerHeight || document.documentElement.clientHeight) * 0.125;
          const bottomLimit = window.innerHeight * 0.125;
          setIsActive((state)=>{
            const isInViewport = bottom > bottomLimit && top <= topLimit;
            // if(isInViewport && !state) window.location.hash = href
            return isInViewport
          });

          if(top < 1 && top >= 0 && window.location.href.includes(href)) window.scrollBy(0,top - window.innerHeight * 0.125)
        }
        else setIsActive(false);

      });
    }
  },[href]);


  return(
    <a href={href} className={ isActive ? styles.activeLink : ''}>
      {name}
    </a>
  )
}