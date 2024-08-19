import React from 'react'
import Header from './Header'
import Main from './Main'
import CardTeam from './CardTeam'
import Meet from './Meet'

export default function Hero() {
  return (
    <div className='w-full'>
      <Header />
      <Main />
      <Meet />
      <CardTeam />
      
    </div>
  )
}
