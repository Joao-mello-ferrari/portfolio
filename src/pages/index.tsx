import type { GetServerSideProps, NextPage } from 'next'

const Home: NextPage = () => {

  return (
    <div/>
  )
}


export const getServerSideProps: GetServerSideProps = async() =>{
  return{
    redirect:{
      destination: "/about",
      permanent: false
    }
  }
}

export default Home
