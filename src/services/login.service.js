const repository = require('../repositories/login.repository');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


async function login(userData){
    const { email, password } = userData;
    
    if(!email || !password){
        throw new Error('Invalid Credentials');
    }

    const response = await repository.findByEmail(email);

    if(!response)
        throw new Error('User not found');

    const passMatch = await bcrypt.compare(password, response.password);

    if(!passMatch)
        throw new Error('Invalid Credentials');

    const token = jwt.sign(
        {userId:response.id, email:response.email},
        proccess.env.JWT_SECRET,
        {expiresIn: '1h'}
    );

    return token;
}

module.exports = {login}