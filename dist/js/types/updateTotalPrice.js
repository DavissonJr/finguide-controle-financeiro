import { getTransactions } from "./storage.js";
const priceText = document.getElementById('price-text');
export function updateBalance() {
    const transactions = getTransactions();
    let balance = 0;
    transactions.forEach((transaction) => {
        let transactionValue;
        if (typeof transaction.value === 'string') {
            const cleanedValue = transaction.value.replace(/[^\d,.-]/g, '').replace(',', '.');
            transactionValue = parseFloat(cleanedValue);
        }
        else {
            transactionValue = parseFloat(transaction.value);
        }
        if (!isNaN(transactionValue)) {
            if (transaction.type === 'Venda') {
                balance += transactionValue;
            }
            else if (transaction.type === 'Compra') {
                balance -= transactionValue;
            }
        }
    });
    const formattedBalance = `R$ ${balance.toFixed(2).replace('.', ',')}`;
    priceText.textContent = formattedBalance;
}
