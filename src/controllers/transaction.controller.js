const service = require('../services/transaction.service');

async function create(req, res) {
    const {amount, type, category, date} = req.body;
    try{
        await service.createTransaction({
            userId: req.user.id,
            amount,
            type,
            category,
            date
        });

        return res.status(201).json({message: 'Transaction created successfully'});
    } catch(err){
        console.error('[ERROR] Creating transaction failed:', err.message);
        return res.status(400).json({error: err.message});
    }
}

module.exports = {create};