const express = require('express');
const { addProduct, removeProduct, singleProduct, ListProduct } = require('../controllers/productController');
const upload = require('../middlewares/upload');

const router = express.Router();

router.post(
    "/add",
    upload.fields([
        { name: 'image1', maxCount: 1 },
        { name: 'image2', maxCount: 1 },
        { name: 'image3', maxCount: 1 },
        { name: 'image4', maxCount: 1 },
    ]),
    addProduct
);
router.post("/single" ,singleProduct )
router.post("/list" , ListProduct);


module.exports = router;