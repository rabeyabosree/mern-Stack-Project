import { MoveRight } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';
import banner from '../assets/banner.png'

function Banner() {
  return (
    <section className='mx-auto max-w-[1440px]'>
      <div className='flexBetween bg-white'>
        <div className='hidden lg:block flex-1 px-6 xl:px-12'>
          <h2 className='h2 uppercase'>Affortale Style , Timeless Appeal</h2>
          <h3 className='h4 uppercase'>Transform Your Closer Today</h3>
          <div className='flex mt-5'>
            <Link to={'/collection'} className='bg-secondary pl-4 !py-0 !pr-0 rounded-full text-white flexCenter gap-x-2 group'>
            Explore clolection 
            <MoveRight className='bg-white text-tertiary rounded-full h-9 w-9 p-2 m-[3px] group-hover:-rotate-[20DEG] transition-all duration-500' />
            </Link>
          </div>
        </div>
        <div>
          <img src={banner} alt="" className='rounded-tl-3xl rounded-bl-3xl' />
        </div>
      </div>
    </section>
  )
}

export default Banner