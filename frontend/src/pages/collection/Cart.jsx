import React, { useContext, useEffect, useState } from 'react';
import { Contex } from '../contex/ShopContex';
import Title from './../products/Title';
import { X } from 'lucide-react';

function Cart() {
  const { products, currency, cartItems, getCartCount, addToCart } = useContext(Contex);
  const [cartData, setCartData] = useState([]);
  const [quantities, setQuantities] = useState({});  // To track quantities

  // Sync cart data with cartItems when cartItems or products change
  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];

      // Loop through the cartItems to build cartData
      for (const itemId in cartItems) {
        for (const size in cartItems[itemId]) {
          if (cartItems[itemId][size] > 0) {
            const product = products.find(product => product._id === itemId);
            if (product) {
              tempData.push({
                _id: itemId,
                size: size,
                quantity: cartItems[itemId][size],
                name: product.name,
                price: product.price,
                image: product.image[0],  // Assuming product has 'image' field
              });
            }
          }
        }
      }

      setCartData(tempData);
    }
  }, [cartItems, products]);

  // Update cartItems when quantity is changed
  const updateCartItemQuantity = (id, size, newQuantity) => {
    if (newQuantity <= 0) return; // Prevent removing items via decrement
    let updatedCartItems = { ...cartItems };
    if (!updatedCartItems[id]) updatedCartItems[id] = {};
    updatedCartItems[id][size] = newQuantity;
    addToCart(id, size); // Update context with new quantity
  }

  const increment = (id, size) => {
    const key = `${id}-${size}`;
    const currentQuantity = quantities[key] || cartItems[id]?.[size] || 1;  // Default to 1 if not set
    const newQuantity = currentQuantity + 1;

    setQuantities(prev => ({ ...prev, [key]: newQuantity }));
    updateCartItemQuantity(id, size, newQuantity);  // Sync with cartItems
  };

  const decrement = (id, size) => {
    const key = `${id}-${size}`;
    const currentQuantity = quantities[key] || cartItems[id]?.[size] || 1;

    if (currentQuantity > 1) {
      const newQuantity = currentQuantity - 1;
      setQuantities(prev => ({ ...prev, [key]: newQuantity }));
      updateCartItemQuantity(id, size, newQuantity);  // Sync with cartItems
    }
  };

  const removeItem = (id, size) => {
    const key = `${id}-${size}`;
    const newQuantities = { ...quantities };
    delete newQuantities[key];
    setQuantities(newQuantities);

    let updatedCartItems = { ...cartItems };
    delete updatedCartItems[id][size];
    if (Object.keys(updatedCartItems[id]).length === 0) {
      delete updatedCartItems[id];
    }
    // Remove item from cartItems context if necessary
    addToCart(id, size);  // Call addToCart to update context
  };

  return (
    <div className='bg-primary mb-16'>
      <div className='max-padd-container py-10'>
        <div className='flexStart gap-x-4'>
          <Title title1={"Cart"} title2={"List"} titleStyles={"h3"} />
          <h5 className='medium-15 text-gray-30 relative bottom-1.5'>({getCartCount()} Items)</h5>
        </div>
        <div className='mt-6'>
          {cartData.length > 0 ? (
            cartData.map((item, index) => (
              <div key={index} className="rounded-lg bg-white p-2 mb-3">
                <div className="flex items-center gap-x-3">
                  <div className="flex items-start gap-6">
                    <img src={item.image} alt={item.name} className="w-16 sm:w-18 rounded" />
                  </div>
                  <div className="cart-item-info">
                    <h5>{item.name}</h5>
                    <X onClick={() => removeItem(item._id, item.size)} className="cursor-pointer" />
                  </div>
                </div>
                <p>Size: {item.size}</p>
                <div>
                  <div className="quantity-controls flex items-center gap-3">
                    <button 
                      onClick={() => decrement(item._id, item.size)} 
                      className="bg-gray-300 text-sm px-2 py-1 rounded"
                    >
                      -
                    </button>
                    <span>{quantities[`${item._id}-${item.size}`] || item.quantity}</span>
                    <button 
                      onClick={() => increment(item._id, item.size)} 
                      className="bg-gray-300 text-sm px-2 py-1 rounded"
                    >
                      +
                    </button>
                    <p className="ml-4">{currency}{item.price}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
