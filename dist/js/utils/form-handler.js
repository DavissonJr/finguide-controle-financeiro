import { saveTransaction } from './storage.js';
import { renderTable } from './table-render.js';
const transactionType = document.getElementById('transactionType');
const item = document.getElementById('item');
const quantity = document.getElementById('quantity');
const value = document.getElementById('value');
const confirmAddBtn = document.getElementById('confirmAddBtn');
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
renderTable();
