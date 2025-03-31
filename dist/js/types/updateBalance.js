import { getTransactions } from "../utils/storage.js";
const priceText = document.getElementById('price-text');
export function updateBalance() {
    const transactions = getTransactions();
    let balance = 0;
    transactions.forEach((transaction) => {
        const transactionValue = Number(transaction.value.replace(/[^\d,-]/g, '').replace(',', '.'));
        if (transaction.type === 'Venda') {
            balance += transactionValue;
        }
        else if (transaction.type === 'Compra') {
            balance -= transactionValue;
        }
    });
    const formattedBalance = `R$ ${balance.toFixed(2).replace('.', ',')}`;
    priceText.textContent = formattedBalance;
}
