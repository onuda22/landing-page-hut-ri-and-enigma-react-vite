import React from 'react'
import Header from './Header'
import Follow from './Follow'
import { CarouselComp } from './CarouselComp'
import ReactDOM from 'react-dom';
export default function Hero() {
  return (
    <nav class="p-2 border-gray-200 dark:bg-gray-900">
      {/* <div>

      // </div> */}
      <div className='w-full'>
        <Header />
        {/* <Main /> */}
        <Follow />
        {/* <CarouselComp /> */}
      </div>
    </nav>
  )
}

