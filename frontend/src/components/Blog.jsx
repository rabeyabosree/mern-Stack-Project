import React from 'react'
import Title from './../pages/products/Title';
import { blogs } from '../assets/data';

function Blog() {
 
  return (
    <section className='max-padd-container py-16'>
      <Title title1={'Our Expert'} title2={'Blog'} titleStyles={"pb-10"} paraStyles={'!block'} />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
  {blogs.map((blog) => (
    <div key={blog.title} className='rounded-3xl border-[11px] border-primary overflow-hidden relative'>
      <img src={blog.image} alt={blog.title} className='w-full h-full object-cover' />

      <div className='absolute top-0 left-0 w-full h-full bg-black/25' /> {/* Corrected 'absulote' to 'absolute' */}
      
      <div className='absolute bottom-4 left-4 text-white text-[15px]'> {/* Corrected 'abulote' to 'absolute' */}
        <h3 className='font-[600] text-[16px]'>{blog.title}</h3> {/* Corrected 'text[16px]' to 'text-[16px]' */}
        <h4>{blog.category}</h4>
        <button className='mt-2 px-4 py-2 bg-primary rounded-full text-white'>
          Continue reading
        </button>
      </div>
    </div>
  ))}
</div>

    </section>
  )
}

export default Blog