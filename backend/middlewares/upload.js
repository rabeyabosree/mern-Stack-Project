const multer = require('multer');
const path = require('path');

// Specify where to store the uploaded files
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Save to uploads folder
    },
    filename: function (req, file, cb) {
        // Ensure unique filenames
        cb(null, Date.now() + path.extname(file.originalname)); // Adding timestamp to file name
    }
});

// Configure Multer with file size and file type filters
const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit for file size
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png|gif/; // Accept image files only
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = filetypes.test(file.mimetype);

        if (extname && mimetype) {
            return cb(null, true);
        } else {
            cb(new Error('Only image files are allowed'));
        }
    }
});

module.exports = upload;
