import React from 'react'
import { news } from '../constants'

function News() {
  return (
    <div className="flex mb-24 justify-center items-center">
      <div className="bg-yellow-400 w-1/4 h-14 flex justify-end pe-20 items-center">
        <h1 className="text-white font-bold text-lg">Latest News</h1>
      </div>
      <div className="bg-black h-14 w-3/4">
        <div className='flex items-center gap-24 text-white justify-items-center py-3'>
          {news.map((nov, index) => (
            <div className="flex gap-5">
              <button key={index} className={`${nov.name == "New"? 'bg-red-500' : (nov.name == 'Epic') ? 'bg-violet-700' : 'bg-green-500'} px-8 py-1 shadow-md mb-44 cursor-default`}>{nov.name}</button>
              <span className="py-1">{nov.description}</span>
            </div>
          ))}
        </div>
        {/* {news.map((nouveau, index) => (
          <button key={index} className={`${nov.name == "New"? 'bg-red-500' : (nov.name == 'Epic') ? 'bg-violet-700' : 'bg-green-500'} px-8 py-1 shadow-md mb-44 cursor-default`}>{nouveau.name}</button>
          <h1 className="font-bold text-2xl mb-5">{nouveau.description}</h1>
        ))} */}
      </div>
    </div>
  )
}

export default News