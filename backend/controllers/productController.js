const { json } = require("express");
const cloudinaryConfig = require("../utilise/cloudinary");
const { default: Product } = require("../models/productmodel");


const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, sizes, populer } = req.body;

        // Handle file uploads properly
        const image1 = req.files?.image1 ? req.files.image1[0] : null;
        const image2 = req.files?.image2 ? req.files.image2[0] : null;
        const image3 = req.files?.image3 ? req.files.image3[0] : null;
        const image4 = req.files?.image4 ? req.files.image4[0] : null;

        // Filter out undefined images
        const images = [image1, image2, image3, image4].filter((item) => item !== null);

        if (images.length === 0) {
            return res.status(400).json({ message: 'At least one image is required' });
        }

        let imageUrls = [];
        try {
            imageUrls = await Promise.all(
                images.map(async (image) => {
                    const result = await cloudinaryConfig.uploader.upload(image.path, { resource_type: 'image' });
                    return result.secure_url;
                })
            );
        } catch (uploadError) {
            return res.status(500).json({ message: 'Error uploading images to Cloudinary', error: uploadError.message });
        }

        // Check if all required data is present
        if (!name || !description || !price || !category || !subCategory || !sizes) {
            return res.status(400).json({ message: 'All product details must be provided' });
        }

        // Parse sizes as JSON if needed
        let parsedSizes = [];
        if (sizes) {
            try {
                parsedSizes = JSON.parse(sizes); // Ensure sizes is an array
                if (!Array.isArray(parsedSizes)) {
                    return res.status(400).json({ message: 'Sizes should be an array' });
                }
            } catch (parseError) {
                return res.status(400).json({ message: 'Invalid JSON format for sizes' });
            }
        }

        // Handle the populer field as boolean
        const isPopuler = populer === 'true'; // convert string 'true' or 'false' to boolean

        // Create the new product object
        const newProduct = {
            name,
            description,
            price,
            category,
            subCategory,
            sizes: parsedSizes,
            populer: isPopuler,
            images: imageUrls, // Store the Cloudinary URLs here
        };

        // Save the new product to the database
        const product = new Product(newProduct);
        await product.save();

        res.status(201).json({ message: 'Product added successfully', product });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};


const removeProduct = async () => {

}

const singleProduct = async () => {

}

const ListProduct = async () => {

}

module.exports = { addProduct, removeProduct, singleProduct, ListProduct }