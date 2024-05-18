import React from 'react'
import { recentReviews } from '../constants'
import { kratos } from '../assets'

function RecentReviews() {
  return (
    <div className='relative overflow-hidden'>
      <img className="absolute right-[-50%] top-[-35%] w-full object-cover" src={kratos} alt="kratos" />
      <div className="lg:mx-60 md:mx-20 sm:mx-10 mx-10">
        <div className="flex flex-col justify-center items-center py-24">
          <button className={`text-white font-bold bg-red-500 w-24 py-1 mb-3 shadow-md`}>New</button>
          <h1 className="font-bold text-4xl">Recent Reviews</h1>
          <div className="grid grid-cols-1 gap-7 mt-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {recentReviews.map((game, index) => (
              <div key={index} className="relative flex flex-col text-center shadow-md pb-5">
                <button className={`absolute left-5 top-[-25px] ${(game.score == 9.4)?'bg-violet-700': (game.score == 9.6)?'bg-green-500':(game.score == 9.7)? 'bg-pink-600' : 'bg-yellow-400'} rounded-full text-white font-bold p-3`}>{game.score}</button>
                <img className="w-full h-96 object-cover" src={game.img} alt={game.name} />
                <h1 className="my-6 text-2xl">{game.name}</h1>
                <p className='text-gray-600'>{game.descri}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentReviews