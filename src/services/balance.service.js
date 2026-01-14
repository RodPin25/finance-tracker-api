const repository = require('../repositories/balance.repository');

async function calculateBalance(userId) {
    if (!userId) {
        throw new Error('userId is required');
    }

    const transactions = await repository.getTransactions(userId);

    const incomes = transactions.filter(t => t.type === 'income');
    const expenses = transactions.filter(t => t.type === 'expense');

    const totalIncome = incomes.reduce((sum, t) => sum + t.amount, 0);
    const totalExpense = expenses.reduce((sum, t) => sum + t.amount, 0);

    const balance = totalIncome - totalExpense;

    return { balance, totalIncome, totalExpense };
}

module.exports = { calculateBalance };
