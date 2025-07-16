import React, { useState, useContext, useEffect } from 'react';
import Title from './../pages/products/Title';
import { Contex } from '../pages/contex/ShopContex';  // Correct import for context
import SingleProduct from './../pages/products/SingleProduct';

function PopulerProducts() {
  const { products } = useContext(Contex);  // Access products from context
  const [populer, setPopuler] = useState([]);

  useEffect(() => {
    // Check if 'populer' is true or any truthy value
    const data = products.filter((item) => Boolean(item.popular));  // Convert 'populer' to boolean (truthy check)
    setPopuler(data.slice(9,14));  // Set the filtered popular products to state
  }, [products]);  // Effect runs when 'products' changes

  return (
    <section className='max-padd-container bg-primary py-16'>
      <Title title1={'Popular'} title2={'Products'} titleStyles={'pb-10'} paraStyles={'!block'} />
      <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8'>
        {populer.length > 0 ? (
          populer.map(product => (
            <li key={product._id}>
             <SingleProduct product={product} />
            </li>
          ))
        ) : (
          <p>No popular products found</p>  // Fallback if no popular products
        )}
      </div>
    </section>
  );
}

export default PopulerProducts;


