import React, { useState } from 'react';

import Logo1 from '../../assets/img/Logo1.svg';
import Img8 from '../../assets/img/img8.jpg';

import { UserIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/outline"; 
import { Bars2Icon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";


function Header() {

  const [open, setOpen] = useState(false);

  return (

    <div>
      <nav className={`hidden lg:flex lg:text-white lg:justify-between lg:text-center lg:p-6 lg:absolute lg:z-10 lg:w-full ${open ? "invisible" : ""}`}>
        <div className='lg:flex lg:gap-3'>
          <a className='hover:-skew-x-[20deg]' href="#" onClick={ () => setOpen(!open) }><Bars2Icon className='w-[24px]'/></a>
        </div>
          <img className='cursor-pointer' src={ Logo1 } alt="test"/>
          <div className='flex gap-3'>
            <a  href="/">
              <UserIcon className='w-[24px] hover:brightness-50'/>
            </a>
            <a  href="/">
              <MagnifyingGlassIcon className='w-[24px] hover:brightness-50'/>
            </a>
            <a  href="/">
              <ShoppingBagIcon className='w-[24px] hover:brightness-50'/>
            </a>
          </div>
      </nav>

      {/* sidebar */}

      <div className={`${open ? "z-10 visible" : "hidden"} w-1/3 bg-white h-screen px-10 fixed`}>
          <a className='cursor-pointer' onClick={ () => setOpen(!open) } href="#"  ><XMarkIcon className='w-[24px] mt-8 '/></a>
        <nav>
          <div className='flex flex-col text-4xl font-inter text-[#3a3939] mt-10  gap-5'>
            <a className='border-b-2 pb-5 font-medium' href="/">Clothing</a>
            <a className='border-b-2 pb-5 font-medium' href="/">Footwear</a>
            <a className='border-b-2 pb-5 font-medium' href="/">Equipment</a>
          </div>
          
          <div className='mt-10'>
            <ul className='flex flex-col gap-3 text-base font-inter'>
              <li>Outlet</li>
              <li>Support</li>
              <li>Wish List</li>
              <li>Journal</li>
              <li>Newsletter</li>
              <li>Manut Mountain School</li>
            </ul>
          </div>

          </nav>
      </div>

      <div className={`grid grid-rows-2 h-screen lg:grid-cols-3 lg:grid-rows-1${open ? {...document.body.style.overflowY = "hidden"} : ""} ${open ? "grid-rows-1 brightness-50" : {...document.body.style.overflowY = "scroll"}}`}>
            <img className='h-full w-screen object-bottom object-cover lg:col-span-2 lg:min-w-full' src= { Img8 } alt="Imagem" />
            <div className=' bg-[#1E405C] flex flex-col justify-center text-white lg:p-0'>
              <div className='items-start ml-7'>
                <h1 className='text-5xl font-overpass lg:text-7xl'>New for fall</h1>
                <p className='text-base font-inter mt-7 mb-7 lg:text-base'>Find that golden fall glow with highlights from our new collection.</p>
                <div className="flex gap-8">
                  <a className='text-sm font-inter lg:text-base hover:scale-125' href="www.localhost:3000">Women</a>
                  <a className='text-sm font-inter lg:text-base hover:scale-125' href="www.localhost:3000">Men</a>
                </div>
              </div>
            </div>
      </div>
    </div>
  )
};

export default Header;