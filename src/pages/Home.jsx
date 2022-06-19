import React, { useEffect } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'

function Home() {
  useEffect(() => {
    document.title = "Online Resume Builder | Build a Professional Resume For Free"
  }, [])
  
  return (
    <>
      <Header />
      <Hero />
    </>
  )
}

export default Home