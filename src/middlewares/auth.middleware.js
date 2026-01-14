const verifyToken = require('../utils/jwt');

async function authMiddleware(req,res,next){
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({message:"Missing Token"});
    }

    const token = authHeader.split(" ")[1];

    try{
        const decoded = verifyToken(token);
        req.user = decoded;
        next();
    } catch(err){
        return res.status(401).json({message:'Invalid or Expired Token'});
    }
}

module.exports = authMiddleware;