import React from 'react'
import Video from '../../assets/video/video1.mp4'

function Explore() {
  return (
    <div className='mb-[70vh]'>
        <video className='w-full h-[80vh] object-cover absolute' src= { Video } autoPlay loop muted />
        <div className='relative text-white font-inter flex flex-col top-[45vh] ml-8 gap-2 lg:gap-5'>
            <h1 className='text-[45px] lg:text-7xl'>Explore together</h1>
            <p className='text-base max-w-[65vw] lg:text-lg'>Pack your bag and grab your crew-it's time to get outside!</p>        
            <div className='relative text-white flex gap-3 lg:gap-5'>
                <a className='text-sm lg:text-base' href="www.localhost:3000">New collection</a>
                <a className='text-sm lg:text-base' href="www.localhost:3000">All hiking gear</a>
           </div>
        </div>
    </div>
  )
}

export default Explore