import { saveTransaction } from './storage.js';
import { renderTable } from './table-render.js';
import { deleteTransactions } from './storage.js';
import { closeAddModal, closeRemoveModal } from './opne-close-modal.js';
import { updateSaldo } from '../types/balance.js';

const transactionType = document.getElementById('transactionType') as HTMLSelectElement;
const item = document.getElementById('item') as HTMLInputElement;
const quantity = document.getElementById('quantity') as HTMLInputElement;
const value = document.getElementById('value') as HTMLInputElement;
const confirmAddBtn = document.getElementById('confirmAddBtn') as HTMLButtonElement;
const removeTransactionBtn = document.getElementById('confirmRemoveBtn') as HTMLButtonElement;

export function addTransaction() {
  const transaction = {
    type: transactionType.value,
    item: item.value,
    quantity: Number(quantity.value),
    value: value.value,
  };

  saveTransaction(transaction);
  updateSaldo();
  closeAddModal();
  renderTable();
}

confirmAddBtn.addEventListener('click', addTransaction);

export function removeTransaction(index){
  deleteTransactions(index);
  closeRemoveModal();
  renderTable();
}

export function consoleTeste(){
  console.log("Testando papai")
}

removeTransactionBtn.addEventListener('click', () => {
  const modal = document.querySelector('#removeModal') as HTMLElement;
  const index = Number(modal.dataset.index);
  removeTransaction(index);
  updateSaldo();
});

renderTable();