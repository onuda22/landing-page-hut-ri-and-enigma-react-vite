import React from 'react'
import Header from './Header'
import Main from './Main'
import CardTeam from './CardTeam'
import Meet from './Meet'
import Footer from './Footer'
import { Splash } from './Splash'

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
