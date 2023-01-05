import React from 'react'
import { useCart } from '../../../Context/Cart'
import { TrashIcon } from '@heroicons/react/24/outline'

function Index() {

  const {productsCart, remove} = useCart()
  
  return (
    <div>
      <button onClick={() => window.history.back()} className='font-inter mt-5 ml-10 p-2 border-2 border-black hover:skew-y-1'>Back to shopping</button>
      <h1 className='text-black m-5 text-2xl lg:ml-10 lg:mb-10 lg:text-4xl sm:text-4xl sm:ml-9 sm:mt-10 mb:text-3xl mb:m-5'>Cart</h1>
      <ul className='p-5 grid grid-col-1 gap-10 mb:p-5 mb:gap-5 mb:grid-cols-2 sm:grid-rows-3 sm:p-10 sm:gap-10 lg:grid-rows-2 lg:grid-cols-3 lg:gap-10 lg:p-10'>
        {productsCart.map((product, key) =>
        <li key={key}>
          <button onClick={() => remove(product)}>
            <div className='flex flex-wrap justify-between'>
              <img className='object-cover' src={product.image} alt="" />
              <h1 className='mt-3 font-inter mb:text-xs sm:text-sm lg:text-base'>{product.title}</h1>
                <TrashIcon className='w-[20px] mt-2 mb:w-[20px]'/>
            </div>
          </button>
        </li>
        )}
      </ul>
    </div>
  )
}

export default Index
