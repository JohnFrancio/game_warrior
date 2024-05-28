import React, { useState } from 'react'
import { navLink } from '../constants'
import MenuIcon from './MenuIcon'
import CloseIcon from './CloseIcon'

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={`bg-black text-white border-b-yellow-400 border-b-2 overflow-hidden`}>
      <nav className="my-4 md:my-0 mx-10 md:mx-20 sm:mx-10 flex justify-between items-center font-bold">
        <div>
          <h1 className="cursor-pointer font-bold text-2xl">Game <span className="text-yellow-400">Warrior</span></h1>
        </div>
        <ul className="list-none justify-center hidden md:flex">
          {navLink.map((link, index) => (
            <li key={index} className={`p-8 cursor-pointer ${(index == navLink.length - 1) ? 'mr-0' : 'mr-10'} hover:text-black hover:bg-yellow-400`}>
              <a href={`#${link.link}`}>{link.name}</a>
            </li>
          ))}
        </ul>
        <button className="md:block hidden bg-yellow-400 text-black px-9 py-3 m-4 rounded-full">Login | Register</button>
        <div className='md:hidden flex items-center' onClick={() => setToggle((prev) => !prev)}>
          {(toggle) ? <CloseIcon fill='yellow'/> : <MenuIcon stroke='yellow'/>}
        </div>
        <div className={`${toggle ? 'flex' : 'hidden'} flex-col p-6 absolute right-0 top-16 bg-yellow-400 opacity-95 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex flex-col">
            {navLink.map((link, index) => (
              <li key={index} className={`cursor-pointer ${(index == navLink.length - 1) ? 'mb-4' : 'mb-4'} hover:text-black hover:bg-yellow-400`}>
                <a href={`#${link.link}`}>{link.name}</a>
              </li>
            ))}
          </ul>
            <button className="text-white">Login | Register</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar