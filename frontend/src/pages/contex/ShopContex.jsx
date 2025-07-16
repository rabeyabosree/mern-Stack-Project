import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { products as initialProducts } from '../../assets/data';
import { toast } from 'react-toastify';

export const Contex = createContext();  // Exporting as Contex

function ShopContex(props) {
    const currency = "$";
    const deliveryCharge = 150;
    const navigate = useNavigate();

    const [products, setProducts] = useState(initialProducts);  // Initialize state with imported data
    const [search, setSearch] = useState("")
    const [showSearch, setShowSearch] = useState(false);
    const [token, setToken] = useState('');
    const [cartItems, setCartItems] = useState({})

    const addToCart = (itemId, size) => {
     
        if (!size) {
            toast.error("Please select size first!");
            return;
        }
    
        let cartData = structuredClone(cartItems); 
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
    
        setCartItems(cartData);  // Update the cart state
    };
    
    const getCartCount = () => {
        let totalCount = 0;
        for (const item in cartItems) {
            for (const size in cartItems[item]) { // Use 'size' instead of 'item'
                try {
                    if (cartItems[item][size] > 0) {
                        totalCount += cartItems[item][size];
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }
        return totalCount;
    };
    

    useEffect(() =>{
      
    },[cartItems])

    const value = {setCartItems, currency, getCartCount, deliveryCharge, products, setProducts, navigate,search,showSearch,token, setToken, setSearch, setShowSearch ,addToCart , cartItems};  // Pass products and others

    return (
        <Contex.Provider value={value}>
            {props.children}
        </Contex.Provider>
    );
}

export default ShopContex;

