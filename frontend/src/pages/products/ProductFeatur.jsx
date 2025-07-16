import { CornerDownRight, Truck, WalletCards } from 'lucide-react'
import React from 'react'

function ProductFeatur() {
  return (
    <section className="bg-primary rounded-xl mt-6 py-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 rounded-xl px-4">
        {/* Easy Return Section */}
        <div className="flexCenter flex-col gap-4 p-6 bg-white rounded-3xl shadow-md hover:shadow-lg transition duration-300">
            <div className="text-5xl mb-3 text-yellow-500">
                <CornerDownRight />
            </div>
            <div>
                <h4 className="text-xl font-semibold capitalize mb-2">Easy Return</h4>
                <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, dolor!
                </p>
            </div>
        </div>

        {/* Fast Delivery Section */}
        <div className="flexCenter flex-col gap-4 p-6 bg-white rounded-3xl shadow-md hover:shadow-lg transition duration-300">
            <div className="text-5xl mb-3 text-red-500">
                <Truck />
            </div>
            <div>
                <h4 className="text-xl font-semibold capitalize mb-2">Fast Delivery</h4>
                <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, dolor!
                </p>
            </div>
        </div>

        {/* Secure Payment Section */}
        <div className="flexCenter flex-col gap-4 p-6 bg-white rounded-3xl shadow-md hover:shadow-lg transition duration-300">
            <div className="text-5xl mb-3 text-secondary">
                <WalletCards />
            </div>
            <div>
                <h4 className="text-xl font-semibold capitalize mb-2">Secure Payment</h4>
                <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, dolor!
                </p>
            </div>
        </div>
    </div>
</section>

  )
}

export default ProductFeatur