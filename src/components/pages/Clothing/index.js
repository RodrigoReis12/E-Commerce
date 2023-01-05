import React from 'react'
import { Link } from 'react-router-dom'

import Footer from '../../home/Footer'
import data from '../../../datas/dataClothing'

import {useCart} from '../../../Context/Cart'

import Logo1 from '../../../assets/img/Logo1.svg'

import { UserIcon } from "@heroicons/react/24/outline"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { ShoppingBagIcon } from "@heroicons/react/24/outline"
import { PlusCircleIcon } from "@heroicons/react/24/outline"
import { Bars2Icon } from "@heroicons/react/24/outline"
// import { Bars3Icon } from "@heroicons/react/24/outline"
import { XMarkIcon } from "@heroicons/react/24/outline"

function Index() {

  const [open, setOpen] = React.useState(false)
  const [ballShop, setBallShop] = React.useState()
  const [products] = React.useState(data)

  const { add, productsCart } = useCart()
  
  const cartRed = () => {
    if([...productsCart].length >= 0){
      setBallShop(!false)
    }else{
      setBallShop(false)
    }
  }

  React.useEffect(() => {
    if(productsCart.length > 0) {
      setBallShop(!false)
    }else{
      setBallShop(false)
    }
  }, [productsCart])

  return (
        <div {...document.body.style.overflowY = "scroll"}>
            <nav className={`flex text-black justify-between text-center p-6 absolute z-10 w-full px-10`}>
              <div className='lg:flex lg:gap-3'>
                <button className='hover:-skew-x-[20deg]' href="#" onClick={ () => setOpen(!open) }><Bars2Icon className='w-[24px]'/></button>
              </div>
                <Link to='/'><img className='hidden mb:flex brightness-0' src={ Logo1 } alt=''/></Link>
                <div className='flex gap-3'>
                  <a  href="/clothing">
                    <UserIcon className='w-[24px] hover:text-red-500'/>
                  </a>
                  <a  href="/clothing">
                    <MagnifyingGlassIcon className='w-[24px] hover:text-red-500'/>
                  </a>
                  <Link to='/shop'>
                    <ShoppingBagIcon  className='w-[24px] hover:text-red-500'/>
                  </Link>
                </div>
            </nav>

            <span className={`${ballShop ? "w-2 h-2 bg-red-400 rounded-lg absolute right-9 top-5" : "hidden"}`}></span>
        
          {/* sidebar */}
          <div className={`${open ? "z-10 visible" : "hidden"}  w-2/3 sm:w-1/3 bg-white h-screen px-10 fixed`}>
              <button className='cursor-pointer' onClick={ () => setOpen(!open) } href="#"  ><XMarkIcon className='w-[24px] mt-8'/></button>
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

            <div className='pt-40 mb-12'>
              <h1 className='text-black m-5 text-2xl lg:ml-10 lg:text-4xl sm:text-4xl sm:ml-9 sm:mt-10 mb:text-3xl mb:m-5'>Clothing</h1>
              <ul className='p-5 grid grid-col-1 gap-10 mb:p-5 mb:gap-5 mb:grid-cols-2 sm:grid-rows-3 sm:p-10 sm:gap-10 lg:grid-rows-2 lg:grid-cols-3 lg:gap-10 lg:p-10' >
              {products.map((product, index) => (
                <button className='hover:scale-105 active:translate-y-1' onClick={() => add(product)}  key={index}>
                  <li onClick={cartRed}>
                    <img src={product.image} className='object-cover' alt="" />
                    <div className='flex flex-wrap justify-between'>
                      <h1 className='font-inter mt-3 mb:text-xs sm:text-sm lg:text-base'> {product.title}</h1>
                     <PlusCircleIcon className='w-[20px] mt-2 mb:w-[24px]'/>
                    </div>
                  </li>
                </button>
              ))}
              </ul>
            </div>
          <Footer />
        </div>
  )
}

export default Index