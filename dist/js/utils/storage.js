export function saveTransaction(transaction) {
    if (!transaction.item || transaction.quantity <= 0 || transaction.value === 'R$ 0,00') {
        console.error('Dados inválidos para salvar:', transaction);
        return;
    }
    const transactions = getTransactions();
    transactions.push(transaction);
    console.log('Salvando transações:', transactions);
    localStorage.setItem('transactions', JSON.stringify(transactions));
}
export function getTransactions() {
    const data = localStorage.getItem('transactions');
    console.log('Recuperando transações:', data);
    if (data) {
        const transactions = JSON.parse(data);
        return transactions.filter((transaction) => transaction.item && transaction.quantity > 0 && transaction.value !== 'R$ 0,00');
    }
    return [];
}
