import { getTransactions } from "./storage.js";
export function updateSaldo() {
    const transactions = getTransactions();
    let saldo = 10000;
    transactions.forEach((transaction) => {
        const transactionValue = typeof transaction.value === 'string'
            ? Number(transaction.value.replace(/[^\d,-]/g, '').replace(',', '.'))
            : Number(transaction.value);
        if (transaction.type === 'Compra') {
            saldo -= transactionValue;
        }
        else if (transaction.type === 'Venda') {
            saldo += transactionValue;
        }
    });
    localStorage.setItem('saldo', saldo.toFixed(2));
    const saldoInHtml = document.getElementById("money");
    if (saldoInHtml) {
        saldoInHtml.textContent = `R$ ${saldo.toFixed(2).replace(".", ",")}`;
    }
    else {
        console.error("Elemento HTML não encontrado: #money");
    }
}
