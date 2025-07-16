import React, { useContext, useEffect, useState } from 'react'
import { Contex } from '../contex/ShopContex'
import Title from './Title';
import SingleProduct from './SingleProduct';

function RelatedProducts({ category, subCetagory }) {
  const { products } = useContext(Contex);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let filtered = products.filter((item) => {
        return item.category === category && item.subCetagory === subCetagory;
      });
    

      setRelatedProducts(filtered.slice(10,15));  // Update the related products state
    }
  }, [products, category, subCetagory]);

  return (
    <section className='py-16'>
      <Title title1={'Related'} title2={'Products'} titleStyles={'pb-4'} />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {relatedProducts.map((product) => (
          <SingleProduct product={product} key={product._id} />
        ))}
      </div>
    </section>
  );
}

export default RelatedProducts;
