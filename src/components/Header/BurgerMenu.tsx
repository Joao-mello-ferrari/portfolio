import styles from './Header.module.scss'

import { useSidebarDrawer } from '../../contexts/sidebarDrawer';
import { useEffect } from 'react';

export function BurgerMenu(){
  const { isOpen, onOpen, onClose } = useSidebarDrawer();

  useEffect(()=>{
    if(typeof window !== "undefined"){
      window.addEventListener('hashchange', function() { 
        alert(2121212)
      });
    }
  },[])

  const handleModalState = () =>{
    if(isOpen) onClose();
    else onOpen();
  }
  return(
    <button 
      className={`
        ${styles.hamburgerContainer} 
        ${isOpen ? styles.isOpened : ''}`}
      onClick={handleModalState}
    >
      <span className={styles.hamburger} />
    </button>
  )
}