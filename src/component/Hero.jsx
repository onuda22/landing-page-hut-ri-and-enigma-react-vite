import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { Splash } from './Splash'

export default function Hero() {
  return (
    <div className='w-full'>
        <Splash />
      <Header />
      <Main />
      <Footer />
      
    </div>
  )
}
