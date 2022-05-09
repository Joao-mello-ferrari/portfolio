import { createContext, ReactNode, useContext, useState, useCallback } from 'react'
import { useDisclosure } from '@chakra-ui/react';

interface SidebarDrawerContextProps{
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

interface SidebarDrawerProviderProps{
  children: ReactNode;
}

const SidebarDrawerContext = createContext<SidebarDrawerContextProps>({} as SidebarDrawerContextProps);

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps){
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return(
    <SidebarDrawerContext.Provider value={{ isOpen, onOpen, onClose}}>
      { children }
    </SidebarDrawerContext.Provider>
  )
}

export function useSidebarDrawer(){
  return useContext(SidebarDrawerContext);
}