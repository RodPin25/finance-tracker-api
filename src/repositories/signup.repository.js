const bcrypt = require('bcrypt');

const users = [
    {
        id: 1,
        name: 'Sebastian',
        email: 'sebastian@test.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        id: 2,
        name: 'Fryda',
        email: 'fryda@test.com',
        password: bcrypt.hashSync('password', 10)
    }
];

async function findByEmail(email) {
    console.log('[INFO] Fetching user by email:', email);
    return users.find(user => user.email === email) || null;
}

async function createNewUser(userData) {
    console.log('[INFO] Creating a new user in the database');

    const newUser = {
        id: users.length + 1,
        ...userData
    };

    users.push(newUser);
    return newUser;
}

module.exports = { findByEmail, createNewUser };
