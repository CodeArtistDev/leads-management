import React, { useState } from 'react'
import { AlignLeft, Search, BellRing } from 'lucide-react';
import profilePic from '../assets/dp.png';
const Header = () => {

  const [ dropDown, setDropdown ] =useState(false);

  return (
    <header className='h-20.5 w-full bg-white border-b border-gray-200 px-6 py-4'>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <AlignLeft />
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden w-100">
            <button className='pl-3 text-gray-500 flex items-center cursor-pointer'>
            <Search className='w-5 h-5 '/>
            </button>
            <input type="text" placeholder='Search' className='flex-1 px-2 py-2 ouline-none focus:outline-none ' />
          </div>
          
        </div>
        <div className="flex items-center space-x-4">
          <button className='p-1 text-gray-500 hover:text-gray-800'>
            <BellRing className='w-5 h-5' />
          </button>
          <div className="relative">
            <button onMouseLeave={() => setDropdown(false)} onClick={() => setDropdown(!dropDown)} className='flex items-center gap-2 px-2 py-2 bg-white  rounded-lg  hover:bg-gray-50'>
              <div className='relative'>
                <img src={profilePic} alt="profile-pic" className='w-8 h-8 rounded-full' />
                <span className='absolute bottom-0 right-0 block w-2 h-2 bg-green-500 border-white rounded-full'></span>
              </div>
              <div className='text-left'>
                <div className="text-sm font-bold text-gray-900">Pamela Cain</div>
                <div className="text-xs text-gray-500">pamela@dyson.com</div>
              </div>
            </button>
            { dropDown && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Account</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Billing</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Settings</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Logout</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header