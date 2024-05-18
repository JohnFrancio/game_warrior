import React from 'react'
import { heroIcon } from '../constants'

function Hero() {
  return (
    <div className="lg:mx-60 md:mx-20 sm:mx-10 mx-10">
      <div className="lg:mt-52 md:mt-20 sm:mt-10 mt-10">
        <h1 className="text-white font-bold text-5xl">The Best <span className="text-yellow-400">Games</span> Out There</h1>
        <p className="text-gray-200 mt-9">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/>Itaque recusandae soluta fugiat commodi esse quos reiciendis, architecto veniam placeat.<br/>Vero qui ullam reprehenderit ea, illum nesciunt aspernatur dignissimos facilis unde.
        </p>
        <div className='mt-7 lg:mb-40 md:mb-40 sm:mb-20 mb-20'>
          <button className="bg-yellow-400 text-black px-9 py-4 rounded-full">Read More</button>
        </div>
        <div className="flex p-3">
        {heroIcon.map((icon, index) => (
          <div key={index} className='mb-5'>
            <button className={`${icon.name == 'mail' ? 'bg-yellow-400' : 'bg-white'} w-9 p-2 rounded-full mr-2`}><img src={icon.icon} className='bg-cover bg-center'/></button>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Hero