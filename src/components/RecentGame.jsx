import React from 'react'
import { killzone, assasin, heart, star } from '../assets'
import { recentGame } from '../constants'
import HeartIcon from './HeartIcon'

function RecentGame() {
  return (
    <div className='mt-24 overflow-hidden'>
      <div className="relative bg-slate-200 w-full min-h-[85svh] z-[0] py-10">
        <div className="absolute top-[-70%] left-[-40%] z-[-1]">
          <img src={assasin} alt="assasin" className="w-3/4"/>
        </div>
        <div className="absolute top-[-75%] right-[-70%] z-[-1]">
          <img src={killzone} alt="killzone" className="w-3/4"/>
        </div>  
        <div className="flex justify-center pt-10">
          <button className={`text-white font-bold bg-red-500 w-24 top-6 left-6 py-1 shadow-md`}>New</button>
        </div>
        <div className="flex justify-center mt-3 mb-12">
          <h1 className="font-bold text-4xl">Recent Games</h1>
        </div>
        <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 z-10 md:mx-20 sm:mx-10 mx-10">
          {recentGame.map((game, index) => (
            <div key={index} className="relative flex flex-col bg-white border shadow-sm">
              <img className="w-full h-48 object-cover" src={game.img} alt={game.name} />
              <button className={`absolute text-white font-bold ${game.type == "New"? 'bg-red-500' : (game.type == 'Epic') ? 'bg-violet-700' : 'bg-sky-500'} w-28 top-6 left-6 py-1 shadow-md`}>{game.type}</button>
              <div className="mt-10 ml-6">
                <h1 className="font-bold text-xl">{game.name}</h1>
                <p className="my-5 text-gray-600">{game.description}</p>
                <p className="my-5 text-gray-600">{game.download}</p>
              </div>
              <div className="absolute flex bottom-0 right-0">
                <button className="bg-yellow-400 cursor-pointer p-1"><img className="stroke-white" src={star}/></button>
                <button className="bg-red-500 cursor-pointer p-1">
                  <HeartIcon className="hover:fill-white"/>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RecentGame