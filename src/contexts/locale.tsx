import { createContext, ReactNode, useContext, 
  useState, Dispatch, SetStateAction, useCallback } from 'react'

interface LocaleContextProps{
  locale: string | undefined;
  setLocale: (locale: string) => void;
}

interface LocaleProviderProps{
  children: ReactNode;
}

const LocaleContext = createContext<LocaleContextProps>({} as LocaleContextProps);

export function LocaleProvider({ children }: LocaleProviderProps){
  const [locale, setThisLocale] = useState(()=>{
    if(typeof window === "undefined") return undefined;
    const defaultLocale = localStorage.getItem('@portfolio:loc');

    if(!defaultLocale) return undefined;
    return defaultLocale;
  });

  const setLocale = useCallback((locale: string)=>{
    localStorage.setItem('@portfolio:loc', locale);
    setThisLocale(locale);
  },[])
  
  return(
    <LocaleContext.Provider value={{ locale, setLocale }}>
      { children }
    </LocaleContext.Provider>
  )
}

export function useLocale(){
  return useContext(LocaleContext);
}