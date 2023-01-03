import { useSidebarDrawer } from '../../contexts/sidebarDrawer'

import {
  Drawer,
  DrawerBody,
  // DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  // DrawerCloseButton,
} from '@chakra-ui/react'

import { MobileNav } from '../MobileNav';
import { LanguageSwitch } from '../LanguageSwitch';

import styles from './MobileSidebar.module.scss';
import { Theme } from '../Theme';
import { useState } from 'react';

type SidebarDrawerProps={ locale: string; }

export function SidebarDrawer({ locale }: SidebarDrawerProps) {
  const { isOpen, onClose } = useSidebarDrawer();
  const [theme, setTheme] = useState(() => {
    const storedTheme = window.localStorage.getItem('@theme');
    
    console.log(storedTheme)
    if(!storedTheme){
      return 'dark';
    } 
    
    if(!['light', 'dark'].includes(storedTheme)){
      return 'dark';
    }

    document.documentElement.setAttribute("theme", storedTheme);
    return storedTheme as 'light' | 'dark';
  });

  function toggleTheme(theme: 'light' | 'dark'){
    window.localStorage.setItem('@theme', theme);
    document.documentElement.setAttribute("theme", theme);
    setTheme(theme);
  }

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            display="flex"
            justifyContent="center"
            className={styles.drawerHeader}
          >
            <div className={styles.drawerHeaderContainer}>
              <LanguageSwitch locale={locale}/>
              <Theme theme={theme} action={toggleTheme}/>
            </div>
          </DrawerHeader>
          <DrawerBody
            display="flex"
            justifyContent="flex-start"
            alignItems="flex-start"
            className={styles.drawerBody}
          >
            <MobileNav/>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}