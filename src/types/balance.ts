import { cleanCurrency } from "../utils/currencyUtils.js";
import { getTransactions } from "./storage.js";


export function updateSaldo(): void {
    const transactions = getTransactions();
    let saldo = 10000.00;

    transactions.forEach((transaction: any) => {
        let transactionValue: number;

        if (typeof transaction.value === 'string') {
            transactionValue = cleanCurrency(transaction.value);
        } else {
            transactionValue = parseFloat(transaction.value);
        }

        if (!isNaN(transactionValue)) {
            if (transaction.type === 'Compra') {
                saldo -= transactionValue;
            } else if (transaction.type === 'Venda') {
                saldo += transactionValue;
            }
        }
    });

    localStorage.setItem('saldo', saldo.toFixed(2));

    const saldoInHtml = document.getElementById("money") as HTMLSpanElement;
    if (saldoInHtml) {
        saldoInHtml.textContent = `R$ ${saldo.toFixed(2).replace('.', ',')}`;
    } else {
        console.error("Elemento HTML não encontrado: #money");
    }
}
