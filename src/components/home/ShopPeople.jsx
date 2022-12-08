import React from 'react';
import ImgMen from '../../assets/img/imgMen.jpg'
import ImgWomen from '../../assets/img/imgWomen.jpg'

function ShopPeople() {
  return (
    <div className='pt-20 pb-20'>
        <div className='grid grid-rows-2 gap-8 justify-items-center sm:grid-cols-2 sm:grid-rows-1 sm:gap-0'>
            <div className=' w-5/6 relative'>
                  <a className='after:content-["➜_Shop_now"] after:absolute after:bottom-10 after:left-10 after:font-inter after:text-white lg:hover:text-lg before:content-["Men"] before:absolute before:text-white before:font-inter before:scale-100 before:top-5 before:left-10' href="http://localhost:3000/E-commerce"><img className='h-full object-cover' src= { ImgMen } alt="men camping"/></a>
            </div>
            <div className=' w-5/6 relative'>
                <a className='after:content-["➜_Shop_now"] after:absolute after:bottom-10 after:left-10 after:font-inter after:text-white lg:hover:text-lg before:content-["Women"] before:absolute before:text-white before:scale-100 before:font-inter before:top-5 before:left-10' href="http://localhost:3000/E-commerce"><img className='h-full object-cover' src= { ImgWomen } alt="women camping" /></a>
            </div>
        </div>
    </div>
  )
};

export default ShopPeople;