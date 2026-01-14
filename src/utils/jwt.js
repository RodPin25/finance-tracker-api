const jwt=require("jsonwebtoken");

const SUPER_SECRET_KEY=process.env.SUPER_SECRET_KEY||"your-256-bit-secret";

function verifyToken(token){
    return jwt.verify(token, SUPER_SECRET_KEY);
}