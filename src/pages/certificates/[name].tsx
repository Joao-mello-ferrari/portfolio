import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";

interface CertificateProps{
  name: string;
}

export default function Certificate({ name }: CertificateProps){
  const [height, setHeight] = useState(0);

  useEffect(()=>{
    if(typeof window !== "undefined") setHeight(window.innerHeight);
  },[])

  return(
    <embed 
      src={`/files/${name}.pdf`}
      width="100%" 
      height={height*0.99}
    />  
  )
}

export const getServerSideProps: GetServerSideProps = async(req) =>{
  const params = req.params;
  
  if(!params?.name){
    return{
      redirect:{
        destination: '/about',
        permanent: false
      }
    }
  }

  return{
    props:{
      name: params.name
    }
  }
}