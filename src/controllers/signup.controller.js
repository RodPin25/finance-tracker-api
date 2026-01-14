const service =  require('../services/signup.service');

async function signupController(req, res){
    const { email, password } = req.body;

    try{
        await service.createUser({email, password});
        res.status(201).json({message:"User created successfully"});
    } catch (err) {
        res.status(400).json({message: err.message});
    }
}

module.exports = { signupController };