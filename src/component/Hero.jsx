import React from 'react'
import Header from './Header'
import Follow from './Follow'
import { CarouselComp } from './CarouselComp'
import ReactDOM from 'react-dom';
export default function Hero() {
  return (
      <div className='w-full'>
        <Header />
        <Main />
        <Follow />
        <CarouselComp />
      </div>

  )
}

