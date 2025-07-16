import React from 'react'
import image1 from '../assets/features/feature1.png'
import image2 from '../assets/features/feature2.png'
function Features() {
  return (
    <section className="max-w-screen-xl mx-auto px-6 pt-14 pb-20">
    <div className="grid grid-cols-1 xl:grid-cols-[1.5fr_2fr] gap-6 gap-y-12 rounded-xl place-items-center">
      
      {/* Image Section */}
      <div className="flex items-center justify-center gap-x-10">
        <div>
          <img src={image1} alt="Image 1" className="w-[222px] h-[222px] rounded-full object-cover" />
        </div>
        <div>
          <img src={image2} alt="Image 2" className="w-[222px] h-[222px] rounded-full object-cover" />
        </div>
      </div>
  
      {/* Features Section */}
      <div className="flex flex-wrap sm:flex-nowrap gap-x-5 justify-center sm:justify-start">
        <div className="text-center sm:text-left bg-gray-100 p-5 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold">Quality Product</h4>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eveniet?</p>
        </div>
        <div className="text-center sm:text-left bg-gray-100 p-5 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold">Fast Delivery</h4>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eveniet?</p>
        </div>
        <div className="text-center sm:text-left bg-gray-100 p-5 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold">Secure Payment</h4>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eveniet?</p>
        </div>
      </div>
  
    </div>
  </section>
  
  )
}

export default Features