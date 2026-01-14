const repositorie = require('../repositories/signup.repository');
const bycrypt = require('bcrypt');

async function createUser(userData){
    const {email, password}= userData;
    if(!email || !password){
        throw new Error("Email and password are required");
    }

    const emails = await repositorie.getAllEmails();

    const emailExists = emails.some((user) => user.email === email);

    if(emailExists){
        throw new Error("Email already in use");
    }

    const hashedPass= await bycrypt.hash(password,10);
    userData.password= hashedPass;

    return await repositorie.createNewUser(userData);
}

module.exports = { createUser };