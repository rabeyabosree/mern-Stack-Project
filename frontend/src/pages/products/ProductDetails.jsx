import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Contex } from '../contex/ShopContex';
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { Heart, ShoppingBag, Truck } from 'lucide-react';
import ProductFeatur from './ProductFeatur';
import RelatedProducts from './RelatedProducts';
import ProductDescription from './ProductDescription';
import Footer from './../../components/Footer';

function ProductDetails() {
    const { id } = useParams();
    const { products, currency ,addToCart} = useContext(Contex);
    const [product, setProduct] = useState(null);
    const [image, setImage] = useState("");
    const [size, setSize] = useState("");

    const fetchProductData = async () => {
        const selectedProduct = products.find((item) => item._id === id);
        if (selectedProduct) {
            setProduct(selectedProduct);
            setImage(selectedProduct.image[0]);
        }
    };

    useEffect(() => {
        fetchProductData();
    }, [id, products]);

    if (!product) {
        return (
            <div className="flex justify-center items-center mt-20">
                {/* Replace with actual loader */}
                <div className="loader"></div>
            </div>
        );
    }

    // Formatting the price for currency
    const getCurrencyCode = (currencySymbol) => {
        const currencyMap = {
            "$": "USD",
            "€": "EUR",
            "£": "GBP",
            "₹": "INR",
            // Add more mappings as needed
        };

        return currencyMap[currencySymbol] || 'USD';  // Default to USD if no match
    };

    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: getCurrencyCode(currency), // Pass the correct ISO code
    }).format(product.price);


    return (
        <div className="max-padd-container mt-3">
            {/* Product Info */}
            <div className="flex gap-12 flex-col xl:flex-row bg-primary p-6 pb-16 rounded-2xl">
                {/* Image Gallery */}
                <div className="flex flex-1 gap-x-2 xl:flex-1">
                    <div className="flexCenter flex-col gap-[7px] flex-wrap">
                        {product.image.map((item, i) => (
                            <img
                                key={i}
                                src={item}
                                alt={`Product thumbnail ${i + 1}`}
                                className="cursor-pointer max-h-[89px] rounded-lg"
                                onClick={() => setImage(item)}
                            />
                        ))}
                    </div>

                    {/* Main Image */}
                    <div className="w-96 flex justify-center transition duration-300 ease-in-out">
                        <img
                            src={image}
                            alt={product.name}
                            className="rounded-xl bg-gray-100 transition-opacity"
                        />
                    </div>

                </div>

                {/* Product Details */}
                <div className="flex-[1.5] rounded-2xl xl:px-7">
                    <h2 className="h3 leading-none">{product.name}</h2>

                    <div className="flex items-baseline gap-x-5">
                        <div className="flex items-center gap-x-2">
                            <div className="flex gap-x-2 text-secondary">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaRegStarHalfStroke />
                            </div>
                            <span>(122)</span>
                        </div>
                    </div>

                    {/* Price and Currency */}
                    <h4 className="h4 my-2">{formattedPrice}</h4>
                    <p className="max-w-[400px]">{product.description}</p>

                    {/* Size Selector */}
                    <div className="flex flex-col gap-4 my-4 mb-5">
                        <div className="flex gap-2">
                            {[...product.sizes]
                                .sort((a, b) => {
                                    const order = ["S", "M", "L", "XL", "XXL"];
                                    return order.indexOf(a) - order.indexOf(b);
                                })
                                .map((item, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setSize(item)}
                                        className={`${item === size ? "ring-2 ring-slate-900/20" : "ring-1 ring-slate-900/5"
                                            } medium-14 h-8 w-10 bg-primary rounded`}>
                                        {item}
                                    </button>
                                ))}
                        </div>
                    </div>

                    {/* Add to Cart Button */}
                    <div className="flex items-center gap-x-4">
                        <button onClick={() => addToCart(product._id, size)}

                            className="btn-secondary !rounded-lg !py-2 px-6 w-1/2 flexCenter gap-x-2 capitalize"
                            disabled={!size}>
                            Add to Cart <ShoppingBag />
                        </button>
                        <button className="btn-light !rounded-lg !py-3.5">
                            <Heart />
                        </button>
                    </div>

                    <div className="flex items-center gap-x-2 mt-3">
                        <Truck className="text-lg" />
                        <span className="medium-14">Free delivery on orders over 500$</span>
                    </div>

                    <hr className="my-3" />

                    <div className="mt-2 flex flex-col gap-1 text-gray-300 text-xs">
                        <div>Authenticity You Can Trust</div>
                        <div>Enjoy cash on delivery for your convenience</div>
                    </div>
                </div>
            </div>

            {/* Product Features, Description, and Related Products */}
            <ProductDescription />
            <ProductFeatur />
            <RelatedProducts category={product.category} subCetagory={product.subCetagory} />
            <Footer />
        </div>
    );
}

export default ProductDetails;

