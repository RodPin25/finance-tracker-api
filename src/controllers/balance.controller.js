const service = require('../services/balance.service');

async function balance(req, res) {
    const { id: userId } = req.user;

    try {
        const result = await service.calculateBalance(userId);

        return res.status(200).json({
            balance: result.balance,
            incomes: result.totalIncome,
            expenses: result.totalExpense
        });
    } catch (err) {
        console.error("[ERROR] Fail while calculating balance:", err.message);
        return res.status(500).json({ message: err.message });
    }
}


module.exports = { balance };
