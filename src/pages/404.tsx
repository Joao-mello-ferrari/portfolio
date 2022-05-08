import Router from 'next/router'
import { useEffect } from 'react'

export default function Custom404() {
  useEffect(()=>{
    Router.push('/about');
  },[]);

  return <h1>404 - Page Not Found</h1>
}


