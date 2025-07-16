const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const generateToken = (id) => {
    // Create the payload, which typically includes the user's ID or other relevant information
    const payload = { id }; 
    
    // Generate the token using the payload and secret key
    const token = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: '1h' });

    return token;
};

module.exports = generateToken