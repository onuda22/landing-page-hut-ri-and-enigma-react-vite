import React from 'react'
import dataTeam from '../../dataTeam'
import github from '../assets/icons8-github-30.png'
import link from '../assets/linkedin.png'
export default function Card() {
  const datas = dataTeam;


  return (
    
    <div className='flex flex-row   gap-5'>
    {datas.map((data)=>{
      return(

      <div className="flex space-x-8 items-end h-[205px] ">
      <div className="w-[180px] h-[605px] bg-gray-200 rounded-lg overflow-hidden flex flex-col items-center p-4 ">
            <img 
            src={data.foto} 
            className="w-auto h-[205px] max-w-full max-h-full rounded-lg object-cover" 
            />
            <p className="mt-1 text-gray-700 text-center font-bold">{data.nama}</p>
            <p className="mt-1 text-gray-700 text-center">
            {data.haparan}
            </p>
            <hr className='w-full h-1 bg-gray-400 rounded-xl my-4' />
            <div className='flex flex-row '> 
              <a href={data.github}><img src={github} alt="" /></a>
              <a href={data.link}><img src={link} alt="" /></a>
            </div>
      </div>
      </div>
      )
    })
      
    }
      </div>
    )
}
