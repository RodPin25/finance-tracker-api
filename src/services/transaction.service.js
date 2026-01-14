const repository = require('../repositories/transaction.repository');

async function createTransaction(data){
    if(data.amount <= 0){
        throw new Error('Amount must be greater than zero');
    }

    return await repository.insert(data);
}
async function deleteTransaction(id){
    if(!id)
        throw new Error('ID is required');  
    
    return await repository.deleteTransaction(id);
}

module.exports = {createTransaction};