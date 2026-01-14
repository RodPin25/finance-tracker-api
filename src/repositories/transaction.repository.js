const transactions = [
    { id: 1, userId: 1, type: 'income', value: 1500, category: 'salary' },
    { id: 2, userId: 1, type: 'expense', value: 400, category: 'groceries' },
    { id: 3, userId: 1, type: 'expense', value: 250, category: 'spotify' },
    { id: 4, userId: 2, type: 'income', value: 2000, category: 'salary' },
    { id: 5, userId: 2, type: 'expense', value: 800, category: 'netflix' }
];

async function insert(transaction) {
    console.log('[INFO] Inserting transaction into the database', transaction);

    const newTransaction = {
        id: transactions.length + 1,
        ...transaction
    };

    transactions.push(newTransaction);
    return newTransaction;
}

async function getTransactions(userId) {
    console.log('[INFO] Fetching transactions for user:', userId);
    return transactions.filter(t => t.userId === userId);
}

async function getTransactionsByCat(userId, category) {
    console.log('[INFO] Fetching transactions by category:', category);
    return transactions.filter(
        t => t.userId === userId && t.category === category
    );
}

async function deleteTransaction(id) {
    console.log('[WARNING] Deleting transaction from the database', id);

    const index = transactions.findIndex(t => t.id === id);
    if (index === -1) return false;

    transactions.splice(index, 1);
    return true;
}

module.exports = {
    insert,
    getTransactions,
    getTransactionsByCat,
    deleteTransaction
};
