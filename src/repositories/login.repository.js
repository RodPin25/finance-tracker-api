async function findByEmail(email){
    console.log('[INFO] Fetching user by email: ',email);
    // SELECT * FROM users WHERE email = ?
    //Se retorna el valor de la consulta
}

module.exports = { findByEmail }