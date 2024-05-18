import React from 'react'
import { popular } from '../constants'

function Popular() {
  return (
    <div className="bg-gray-900 text-white py-20">
      <div className="md:mx-20 sm:mx-10 mx-10">
        <span className="uppercase font-bold bg-orange-500 px-5 py-2 shadow-md">PopularGame</span>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
          {popular.map((game, index) => (
            <div key={index} className='bg-black bg-opacity-50 py-[5px]'>
              <span className='uppercase text-black font-bold py-2 px-5 bg-yellow-400'>{game.type}</span>
              <div className="flex flex-col md:flex-row gap-6 items-center mt-10 mb-8 mx-8">
                <div>
                  <img src={game.img} alt={game.name} className='bg-cover bg-top w-48 h-52 object-cover'/>
                </div>
                <div>
                  <h1 className='font-bold text-yellow-400 text-2xl'>{game.name}</h1>
                  <div className="text-gray-600 my-5">
                    <p>Date of annoncement : <span className="text-white">{game.dateOut}</span></p>
                    <p>Date of release : <span className="text-white">{game.dateRelease}</span></p>
                    <p>Game type : <span className="text-white">{game.genre}</span></p>
                    <p>Development studio : <span className="text-white">{game.studio}</span></p>
                  </div>
                  <p className="text-gray-600"><span className="text-yellow-400">Descri: </span> {game.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Popular