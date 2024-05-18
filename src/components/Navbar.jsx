import React from 'react'
import { navLink } from '../constants'

function Navbar() {
  return (
    <div className={`bg-black text-white border-b-yellow-400 border-b-2`}>
      <nav className="mx-10 md:mx-20 sm:mx-10 flex justify-between items-center font-bold">
        <div>
          <h1 className="cursor-pointer font-bold text-2xl">Game <span className="text-yellow-400">Warrior</span></h1>
        </div>
        <ul className="list-none flex justify-center">
          {navLink.map((link, index) => (
            <li key={index} className={`p-8 cursor-pointer ${(index == navLink.length - 1) ? 'mr-0' : 'mr-10'} hover:text-black hover:bg-yellow-400`}>
              <a href={`#${link.link}`}>{link.name}</a>
            </li>
          ))}
        </ul>
        <button className="bg-yellow-400 text-black px-9 py-3 m-4 rounded-full">Login | Register</button>
      </nav>
    </div>
  )
}

export default Navbar