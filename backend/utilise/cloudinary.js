const cloudinary = require('cloudinary').v2;  // Make sure you're importing 'v2'

const cloudinaryConfig = async () => {
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,    // Set the Cloudinary cloud name from environment
    api_key: process.env.API_KEY,    // Set the API key from environment
    api_secret: process.env.API_SECRET_KEY, // Set the API secret from environment
  });

  console.log('Cloudinary configuration completed');
};

module.exports = cloudinaryConfig;
