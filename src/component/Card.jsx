import React from 'react';
import dataTeam from '../../dataTeam';
import github from '../assets/icons8-github-30.png';
import link from '../assets/linkedin.png';

export default function Card() {
  const datas = dataTeam;

  return (
    <div className="flex flex-wrap gap-5 justify-center items-start">
      {datas.map((data) => {
        return (
          <div className="w-full sm:w-[180px] md:w-[200px] lg:w-[220px] flex">
            <div className="w-full min-h-[300px] h-[605px] bg-gray-200 rounded-lg overflow-hidden flex flex-col items-center p-4 justify-between">
              <div className="flex flex-col items-center">
                <img
                  src={data.foto}
                  className="w-auto h-[205px] max-w-full max-h-full rounded-lg object-cover"
                />
                <p className="mt-1 text-gray-700 text-center font-bold">{data.nama}</p>
                <p className="mt-1 text-gray-700 text-center">
                  {data.haparan}
                </p>
              </div>
              <div className="w-full">
                <hr className="w-full h-1 bg-gray-400 rounded-xl my-4" />
                <div className="flex justify-center space-x-4">
                  <a href={data.github}><img src={github} alt="GitHub" /></a>
                  <a href={data.link}><img src={link} alt="LinkedIn" /></a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
