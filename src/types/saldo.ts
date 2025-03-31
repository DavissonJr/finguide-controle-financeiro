import { getTransactions } from "../utils/storage.js";

export function updateSaldo(): void {
    const transactions = getTransactions();
  
    let saldo = 10000; 
  
    transactions.forEach((transaction: any) => {
      const transactionValue = parseFloat(transaction.value.replace('R$ ', '').replace(',', '.'));
      if (transaction.quantity > 0) {
        if (transaction.item === 'compra') {
          saldo -= transactionValue;
        } else if (transaction.item === 'venda') {
          saldo += transactionValue; 
        }
      }
    });
  
    console.log("Saldo atualizado:", saldo); 
  
    localStorage.setItem('saldo', saldo.toFixed(2));
  
    const saldoInHtml: HTMLSpanElement = document.getElementById("money") as HTMLSpanElement;
    if (saldoInHtml) {
      saldoInHtml.textContent = `R$ ${(saldo).toFixed(2).replace(".", ",")}`;
    } else {
      console.error("Elemento HTML não encontrado: #money");
    }
  }
  