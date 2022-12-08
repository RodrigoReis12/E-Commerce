import React from 'react';

import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline";


function Footer() {
  return (
    <div className='bg-[#1E405C] pt-10 '>
        <ul className='grid grid-cols-2 grid-rows-2 items-center text-center text-white font-inter mb-7 sm:w-1/2 sm:m-auto'>
            <li className='flex flex-col items-center flex-wrap'>
                <ChatBubbleBottomCenterIcon className='w-5'/>
                <h1 className='mt-4 lg:text-lg'>Chat</h1>
                <p className='text-xs mt-1 mb-10 lg:text-sm'>We are currently offline</p>
            </li>

            <li className='flex flex-col items-center flex-wrap'>
                <EnvelopeIcon className='w-5'/>
                <h1 className='mt-4 lg:text-lg'>Email</h1>
                <p className='text-xs mt-1 mb-10 lg:text-sm'>We usually reply within 48 hours</p>
            </li>

            <li className='flex flex-col items-center flex-wrap'>
                <PhoneIcon className='w-5'/>
                <h1 className='mt-4 lg:text-lg'>Call us</h1>
                <p className='text-xs mt-1 mb-10 lg:text-sm'>Mon-Fri: 8am-5pm GMT</p>
            </li>

            <li className='flex flex-col items-center flex-wrap'>
                <StarIcon className='w-5'/>
                <h1 className='mt-4 lg:text-lg'>Feedback</h1>
                <p className='text-xs mt-1 mb-10 lg:text-sm'>Always a good idea</p>
            </li>
        </ul>

        <div className='font-inter sm:flex sm:justify-around sm:mt-20'>
            <ul className='flex flex-col text-2xl text-white gap-4 ml-5 sm:w-1/3'>
                <li className='border-b-2 border-gray-500 pb-3'>Support</li>
                <li className='border-b-2 border-gray-500 pb-3'>Account</li>
                <li className='border-b-2 border-gray-500 pb-3'>Wish List</li>
                <li className='border-b-2 border-gray-500 pb-3'>Outlet</li>
                <li className='border-b-2 border-gray-500 pb-3'>Manut Mountain School</li>
                <li className='border-b-2 border-gray-500 pb-3'>Newsletter</li>
            </ul>
            <div className='text-white flex flex-col ml-5 mt-10 mb-10 flex-wrap gap-3 max-w-[70ch] sm:max-w-[30ch] sm:flex sm:m-0'>
                <h1 className='text-xs text-gray-300'>About Manut</h1>
                <p className='text-base leading-5'>Manut is a Swiss premium outdoor company founded in 1862 providing high quality products and unique brand experiences to mountain sport enthusiasts around the globe.</p>
            </div>
            <div className='text-white ml-5 mb-10 sm:m-0'>
                <h1 className='text-xs text-gray-300 mb-4'>Follow</h1>
                <ul className='flex flex-col gap-1'>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Youtube</li>
                    <li>Strava</li>
                    <li>Pinterest</li>
                    <li>LinkedIn</li>
                </ul>
            </div>
        </div>

        <div>
            <ul className='pb-16 flex flex-wrap justify-center gap-2 text-xs text-white font-inter leading-3 sm:mt-20'>
                <li>Cookies</li>
                <li>Legal Notice</li>
                <li>Terms & Conditions</li>
                <li>Data Protection Policy</li>
            </ul>
        </div>
    </div>
  )
};

export default Footer;