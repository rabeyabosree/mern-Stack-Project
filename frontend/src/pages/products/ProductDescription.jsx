import React from 'react'

function ProductDescription() {
  return (
    <div className='ring-1 ring-slate-900/10 rounded-lg'>
        <div className='flex gap-3'>
            <button className='medium-14 p-3 w-32 border-b-2 border-secondary'>Description</button>
            <button className='medium-14 p-3 w-32'>Care guide</button>
            <button className='medium-14 p-3 w-32'>Size guide</button>
        </div>
        <hr className='h-[1px] w-full' />

        <div className='flex flex-col gap-3 p-4'>
            <div>
                <h5 className='h5'>Details</h5>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Nostrum eos perspiciatis consequuntur 
                    dignissimos quae architecto quo, facere incidunt? Alias, ducimus.
                </p>
                <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, sequi.</p>
            </div>

            <div>
                <h5 className='h5'>Benefit</h5>
                <ul className='list-disc pl-5 text-sm text-gray-30 flex flex-col gap-1'>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ProductDescription