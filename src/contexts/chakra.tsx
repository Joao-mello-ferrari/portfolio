import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { ReactNode } from 'react';

let customTheme = extendTheme({
  shadows:{ outline: 'none' }
});

interface CustomChakraProviderProps{
  children: ReactNode;
}

export function CustomChakraProvider({ children }: CustomChakraProviderProps){
  return(
    <ChakraProvider theme={customTheme}>
      { children }
    </ChakraProvider>
  )
}