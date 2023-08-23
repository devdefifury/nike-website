import React, { useState } from 'react'

import { navLinks } from '../constants'
import { headerLogo } from '../assets/images'

const Nav = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="shadow-md w-full fixed top-0 left-0 z-10">
      <nav className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7 max-container border ">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-montserrat
      text-gray-800"
        >
          <img src={headerLogo} alt="logo" />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-2 cursor-pointer md:hidden "
        >
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto  pl-9 transition-all duration-500 ease-in ${
            open ? 'top-15 ' : 'top-[-490px]'
          }`}
        >
          {navLinks.map((item) => (
            <li key={item.label} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={item.href}
                className="text-gray-800 hover:text-coral-red duration-500"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Nav
