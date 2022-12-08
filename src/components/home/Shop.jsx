import React from 'react';
import Jacket from '../../assets/img/jacket.webp';
import Jacket2 from '../../assets/img/jacket2.webp';
import Rope from '../../assets/img/rope.webp';
import Pants from '../../assets/img/pants.webp';
import Bags from '../../assets/img/bags.webp';
import AirBag from '../../assets/img/airbag.webp';

function Shop() {
  return (
    <div>
        <ul className='text-xl font-inter ml-5 grid grid-cols-1 grid-rows-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-20 lg:gap-x-5 sm:mb-20'>
            <a href="">
              <li className='flex items-center justify-between border-b-2 lg:border-r-2 lg:border-b-0'>Eiger Extreme<img  className='w-1/6' src={ Jacket } alt="" /></li>
            </a>
            <a href="">
              <li className='flex items-center justify-between border-b-2 lg:border-r-2 lg:border-b-0'>Ropes<img  className='w-1/6 object-cover' src={ Rope } alt="" /></li>
            </a>
            <a href="">
              <li className='flex items-center justify-between border-b-2 lg:border-b-0'>Rain Jackets<img  className='w-1/6 object-cover' src={ Jacket2 } alt="" /></li>
            </a>
            <a href="">
              <li className='flex items-center justify-between border-b-2 lg:border-r-2 lg:border-b-0'>Pants & Shorts<img  className='w-1/6 object-cover' src={ Pants } alt="" /></li>
            </a>
            <a href="">
              <li className='flex items-center justify-between border-b-2 lg:border-r-2 lg:border-b-0'>Spleeping Bags<img  className='w-1/6 object-cover' src={ Bags } alt="" /></li>
            </a>
            <a href="">
              <li className='flex items-center justify-between border-b-2 mb:border-b-0 sm:border-b-2 lg:border-b-0'>Avalanche Safety<img  className='w-1/6 object-cover' src={ AirBag } alt="" /></li>
            </a>
        </ul>
    </div>
  )
};

export default Shop;