import React from 'react'
import { darksoul } from '../assets'
import { latestPost, userComments } from '../constants'
import AvatarIcon from "./AvatarIcon"

function Testimonals() {
  return (
    <div className="bg-gray-900 text-white py-20">
      <div className="md:mx-20 sm:mx-10 mx-10">
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5'>
          <div className='flex flex-col'>
            <h1 className="cursor-default font-bold text-3xl mb-5">Game <span className="text-yellow-400">Warrior</span></h1>
            <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, obcaecati.</p>
            <img className='w-full h-full' src={darksoul} alt="darksoul" />
          </div>
          <div className="bg-black bg-opacity-50 py-[6px] h-auto">
            <h1 className="font-bold my-5 mx-8 text-2xl">Latest Posts</h1>
            <div className="grid grid-cols-1 gap-5">
              {latestPost.map((game, index) => (
                <div key={index} className=''>
                  <div className="flex flex-col md:flex-row gap-6 mx-8 items-center">
                    <div>
                      <img src={game.img} alt={game.name} className='w-48 h-28 object-cover'/>
                    </div>
                    <div>
                      <h1 className='font-bold text-yellow-400'>{game.date}</h1>
                      <p className='py-3'><span className="text-white">{game.descri}</span></p>
                      <p className="text-gray-600">{game.by}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-black bg-opacity-50 py-[6px] h-auto">
            <h1 className="font-bold my-5 mx-8 text-2xl">Top Comments</h1>
            <div className="grid grid-cols-1 gap-3">
              {userComments.map((comment, index) => (
                <div key={index} className=''>
                  <div className="flex border-b-2 border-gray-500 flex-row gap-6 mx-8 items-center justify-center">
                    <div>
                      <AvatarIcon className="border rounded-full py-1 fill-white" size={65}/>
                    </div>
                    <div>
                      <p className='py-2 text-gray-600'><span className="text-red-600">{comment.name}</span> say:<span className="text-white">{comment.comment}</span></p>
                      <h1 className='font-bold text-yellow-400'>{comment.date}</h1>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonals