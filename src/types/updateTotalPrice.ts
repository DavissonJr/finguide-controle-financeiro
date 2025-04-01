import { getTransactions } from "./storage.js";

const priceText = document.getElementById('price-text') as HTMLElement;

export function updateBalance(): void {
    const transactions = getTransactions();
    let balance = 0;

    transactions.forEach((transaction: any) => {
        const transactionValue = typeof transaction.value === 'string'
            ? Number(transaction.value.replace(/[^\d,-]/g, '').replace(',', '.'))
            : Number(transaction.value);

        if (transaction.type === 'Venda') {
            balance += transactionValue;
        } else if (transaction.type === 'Compra') {
            balance -= transactionValue;
        }
    });

    const formattedBalance = `R$ ${balance.toFixed(2).replace('.', ',')}`;
    priceText.textContent = formattedBalance;
}
