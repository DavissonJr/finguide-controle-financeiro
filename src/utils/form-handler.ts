import { saveTransaction } from './storage.js';
import { renderTable } from './table-render.js';

const transactionType = document.getElementById('transactionType') as HTMLSelectElement;
const item = document.getElementById('item') as HTMLInputElement;
const quantity = document.getElementById('quantity') as HTMLInputElement;
const value = document.getElementById('value') as HTMLInputElement;
const confirmAddBtn = document.getElementById('confirmAddBtn') as HTMLButtonElement;

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