import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Footer from '../../home/Footer';

import Logo1 from '../../../assets/img/Logo1.svg';
import Jacket3 from '../../../assets/img/jacket3.webp'
import Jacket4 from '../../../assets/img/jacket4.webp'
import Jacket5 from '../../../assets/img/jacket5.webp'
import Jacket6 from '../../../assets/img/jacket6.webp'
import Jacket7 from '../../../assets/img/jacket7.webp'
import Jacket8 from '../../../assets/img/jacket8.webp'

import { UserIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/outline"; 
import { ShoppingCartIcon } from "@heroicons/react/24/outline"; 
import { Bars2Icon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";


function Index() {

  const [open, setOpen] = useState(false);

  return (
    <div {...document.body.style.overflowY = "scroll"}>
        <nav className={`hidden lg:flex lg:text-black lg:justify-between lg:text-center lg:p-6 lg:absolute lg:z-10 lg:w-full lg:px-10 ${open ? "invisible" : ""}`}>
          <div className='lg:flex lg:gap-3'>
            <button className='hover:-skew-x-[20deg]' href="#" onClick={ () => setOpen(!open) }><Bars2Icon className='w-[24px]'/></button>
          </div>
            <Link to='/E-commerce'><img className='brightness-0' src={ Logo1 }/></Link>
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
          <button className='cursor-pointer' onClick={ () => setOpen(!open) } href="#"  ><XMarkIcon className='w-[24px] mt-8 '/></button>
        <nav>
          <div className='flex flex-col text-4xl font-inter text-[#3a3939] mt-10 gap-5'>
            <Link className='border-b-2 pb-5 font-medium' to='/clothing'>Clothing</Link>
            <Link className='border-b-2 pb-5 font-medium' to='/footwear'>Footwear</Link>
            <Link className='border-b-2 pb-5 font-medium' to='/equipment'>Equipment</Link>
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



      <div className='lg:pt-40 lg:mb-12'>
        <h1 className='text-black m-5 text-2xl lg:ml-10 lg:text-4xl sm:text-4xl sm:ml-9 sm:mt-10 mb:text-3xl mb:m-5'>Clothing</h1>
        <ul className='p-5 grid grid-col-1 mb:p-5 mb:gap-5 mb:grid-cols-2 sm:grid-rows-3 sm:p-10 sm:gap-10 lg:grid-rows-2 lg:grid-cols-3 lg:gap-10 lg:p-10'>
          <li>
            <img src={ Jacket3 } className='object-cover' alt="" />
            <div className='flex flex-wrap justify-between'>
              <h1 className='text-xs font-overpass text-gray-500 mt-2'>Technical all-rounder for mountain enthusiasts</h1>
              <h2 className='font-inter mb:text-xs sm:text-sm lg:text-base'>Taiss Pro HS Hooded Jacket Men</h2>
              <ShoppingCartIcon className='w-[24px] hidden sm:flex' />
            </div>
          </li>
          <li>
            <img src={ Jacket4 } className='object-cover' alt="" />
            <div className='flex flex-wrap justify-between'>
              <h1 className='text-xs font-overpass text-gray-500 mt-2'>Technical all-rounder for mountain enthusiasts</h1>
              <h2 className='font-inter mb:text-xs sm:text-sm lg:text-base'>Taiss Pro HS Hooded Jacket Women</h2>
              <ShoppingCartIcon className='w-[24px] hidden sm:flex' />
            </div>
          </li>
          <li>
            <img src={ Jacket5 } className='object-cover' alt="" />
            <div className='flex flex-wrap justify-between'>
              <h1 className='text-xs font-overpass text-gray-500 mt-2'>Lightweight down jacket for icy conditions</h1>
              <h2 className='font-inter mb:text-xs sm:text-sm lg:text-base'>Meron IN Hooded Jacket Men</h2>
              <ShoppingCartIcon className='w-[24px] hidden sm:flex' />

            </div>
          </li>
          <li>
            <img src={ Jacket6 } className='object-cover' alt="" />
            <div className='flex flex-wrap justify-between'>
              <h1 className='text-xs font-overpass text-gray-500 mt-2'>Hardshell jacket with excellent breathability</h1>
              <h2 className='font-inter mb:text-xs sm:text-sm lg:text-base'>Aenergy Air HS Jacket Women</h2>
              <ShoppingCartIcon className='w-[24px] hidden sm:flex' />
            </div>
          </li>
          <li>
            <img src={ Jacket7 } className='object-cover' alt="" />
            <div className='flex flex-wrap justify-between'>
              <h1 className='text-xs font-overpass text-gray-500 mt-2'>Lightweight and robust insulated jacket</h1>
              <h2 className='font-inter mb:text-xs sm:text-sm lg:text-base'>Eigerjoch IN Hooded Jacket Women</h2>
              <ShoppingCartIcon className='w-[24px] hidden sm:flex' />
            </div>
          </li>
          <li>
            <img src={ Jacket8 } className='object-cover' alt="" />
            <div className='flex flex-wrap justify-between'>
              <h1 className='text-xs font-overpass text-gray-500 mt-2'>Ultralight insulated jacket for mountain adventures</h1>
              <h2 className='font-inter mb:text-xs sm:text-sm lg:text-base'>Taiss IN Hooded Jacket Women</h2>
              <ShoppingCartIcon className='w-[24px] hidden sm:flex' />
            </div>
          </li>
        </ul>
      </div>

      <Footer />
    </div>
  )
};

export default Index;