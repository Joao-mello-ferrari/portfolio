import { ReactNode } from 'react';
import { CustomChakraProvider } from './chakra';
import { SidebarDrawerProvider } from '../contexts/sidebarDrawer'
import { LocaleProvider } from '../contexts/locale'

interface AllContextsProviderProps{
  children: ReactNode;
}

export function AllContextsProvider({ children }: AllContextsProviderProps){
  return(
    <CustomChakraProvider>
      <SidebarDrawerProvider>
        <LocaleProvider>
          { children }
        </LocaleProvider>
      </SidebarDrawerProvider>
    </CustomChakraProvider>
  )
}