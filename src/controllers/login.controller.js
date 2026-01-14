const service = require('../services/login.service');

async function logUser(req, res){
    const {email,password} = req.body;

    try{
        await service.login({
            email,
            password
        });

        return res.status(200).json({
            message:"Valid user",
            token 
        });
    } catch(err){
        console.error("[ERROR] Error while login an user: ",err.message);
        return res.status(err ? 400:500).json({message: err.message});
    }
}

module.exports = { logUser };