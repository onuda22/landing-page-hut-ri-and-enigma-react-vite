import React from 'react'
import Header from '../component/Header'
import Main from '../component/Main'
import CardTeam from '../component/CardTeam'
import Meet from '../component/Meet'
import Footer from '../component/Footer'
import { Splash } from '../component/Splash'

export default function Hero() {
  return (
    <div className='w-full'>
        <Splash />
      <Header />
      <Main />
      <Meet />
      <CardTeam />
      <Footer />
      
    </div>
  )
}
