import React from 'react'

import { UserDropdown } from './UserDropdown.js'

export const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 z-10 flex  items-center bg-transparent p-4 md:flex-row md:flex-nowrap md:justify-start">
        <div className="mx-auto flex w-full flex-wrap items-center justify-between px-4 md:flex-nowrap md:px-10">
          {/* Brand */}
          <a
            className="hidden text-sm font-semibold uppercase text-white lg:inline-block"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            Dashboard
          </a>
          {/* Form */}
          {/* <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
            <div className="relative flex w-full flex-wrap items-stretch">
              <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i className="fas fa-search"></i>
              </span>
              <input type="text" placeholder="Search here..." className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"/>
            </div>
          </form> */}
          {/* User */}
          {/* <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <UserDropdown />
          </ul> */}
        </div>
      </nav>
      {/* End Navbar */}
    </>
  )
}
