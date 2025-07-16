import React from 'react'
import { Link } from 'react-router-dom';
import {Star} from 'lucide-react'

function SingleProduct({product}) {
  return (
   <div className='bottom-2 relative'>
     <Link to={`/products/${product._id}`} className='flexCenter relative top-12 overflow-hidden m-2.5 rounded-xl'>
    <img src={product.image[0]} alt="" />
       
    </Link>
    <div className='p-3 m-2 rounded-lg pt-4 bg-white shadows'>
        <h4>{product.name}</h4>
        <div className='flexBetween pt-1'>
            <h5 className='h5 pr-2'>${product.price}.00</h5>
            <div className='flex items-baseline'>
            <Star className='text-secondary' />
            <h5 className='h5 relative bottom-0.5'>4.8</h5>
            </div>
        </div>
        <p className='line-clamp-2'>{product.description}</p>
    </div>
   </div>
  )
}

export default SingleProduct