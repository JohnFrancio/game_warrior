import React from 'react'
import { topGame } from '../constants'
function TopGame() {
  return (
    <div className='md:mx-20 sm:mx-10 mx-10'>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        {topGame.map((game, index) => (
          <div key={index} className={`bg-[url(${game.img})] bg-top bg-cover`}>
            <div className="bg-black bg-opacity-60 text-white">
              <div className='p-7'>
                <button className={`${game.type == "New"? 'bg-red-500' : (game.type == 'Epic') ? 'bg-violet-700' : 'bg-green-500'} px-8 py-1 shadow-md mb-44 cursor-default`}>{game.type}</button>
                <h1 className="font-bold text-2xl mb-5">{game.name}</h1>
                <p className='font-normal mb-5'>{game.description}</p>
                <p className='text-sm text-gray-400'>{game.download}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopGame