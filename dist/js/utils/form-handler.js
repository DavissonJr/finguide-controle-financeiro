import { saveTransaction } from './storage.js';
import { renderTable } from './table-render.js';
import { deleteTransactions } from './storage.js';
const transactionType = document.getElementById('transactionType');
const item = document.getElementById('item');
const quantity = document.getElementById('quantity');
const value = document.getElementById('value');
const confirmAddBtn = document.getElementById('confirmAddBtn');
const removeTransactionBtn = document.getElementById('confirmRemoveBtn');
export function addTransaction() {
    const transaction = {
        type: transactionType.value,
        item: item.value,
        quantity: Number(quantity.value),
        value: value.value,
    };
    saveTransaction(transaction);
    renderTable();
}
confirmAddBtn.addEventListener('click', addTransaction);
export function removeTransaction(index) {
    deleteTransactions(index);
    renderTable();
}
export function consoleTeste() {
    console.log("Testando papai");
}
removeTransactionBtn.addEventListener('click', () => {
    const modal = document.querySelector('#removeModal');
    const index = Number(modal.dataset.index);
    removeTransaction(index);
});
renderTable();
