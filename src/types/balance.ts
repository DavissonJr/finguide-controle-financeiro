import { getTransactions } from "./storage.js";

export function updateSaldo(): void {
    const transactions = getTransactions();
    let saldo = 10000;

    transactions.forEach((transaction: any) => {
        const transactionValue = typeof transaction.value === 'string'
            ? Number(transaction.value.replace(/[^\d,-]/g, '').replace(',', '.'))
            : Number(transaction.value);

        if (transaction.type === 'Compra') {
            saldo -= transactionValue;
        } else if (transaction.type === 'Venda') {
            saldo += transactionValue;
        }
    });

    localStorage.setItem('saldo', saldo.toFixed(2));
    const saldoInHtml = document.getElementById("money") as HTMLSpanElement;
    if (saldoInHtml) {
        saldoInHtml.textContent = `R$ ${saldo.toFixed(2).replace(".", ",")}`;
    } else {
        console.error("Elemento HTML não encontrado: #money");
    }
}
