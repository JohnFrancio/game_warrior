import React from 'react'
import { navLink } from '../constants'

function Footer() {
  return (
    <div className='bg-black bg-opacity-80 text-white'>
      <div className="lg:mx-60 md:mx-20 sm:mx-10 mx-10 flex justify-between">
        <div>
          <h1 className="cursor-pointer text-lg p-5">Copyright all right reserved | all belong to <span className="text-blue-700">John Francio</span></h1>
        </div>
        <ul className="list-none flex justify-center">
          {navLink.map((link, index) => (
            <li key={index} className={`p-5 cursor-pointer ${(index == navLink.length - 1) ? 'mr-0' : 'mr-2'} `}>
              <a href={`#${link.link}`}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Footer