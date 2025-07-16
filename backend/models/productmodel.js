const mongoose = require('mongoose');

// Define the product schema
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    sizes: { type: Array, required: true },
    popular: { type: String, required: true },
    date: { type: Number, required: true },  // You can also use 'Date' if you want to store actual dates
});

// Create and export the product model
const Product = mongoose.model('Product', productSchema);
module.exports = Product;
