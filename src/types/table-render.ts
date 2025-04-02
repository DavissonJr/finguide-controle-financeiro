import { updateBalance } from './updateTotalPrice.js';
import { getTransactions } from './storage.js';
import { updateConfirmationModal } from '../utils/update-modal.js';

const tbody = document.querySelector('tbody') as HTMLTableSectionElement;

export function renderTable(): void {
  tbody.innerHTML = '';
  const transactions = getTransactions();

  transactions.forEach((transaction, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <th scope="row">${transaction.type === 'Compra' ? '-' : '+'}</th>
      <td>${transaction.item}</td>
      <td>${transaction.quantity}</td>
      <td>${transaction.value}</td>
      <td class="d-none d-md-flex">
        <i class="bi bi-trash"
          data-bs-toggle="modal"
          data-bs-target="#removeModal" 
          data-index="${index}"
          data-item="${transaction.item}"
          data-quantity="${transaction.quantity}"
          data-value="${transaction.value}"></i>
      </td>
    `;
    tbody.appendChild(row);
  });

  const addBtn = document.getElementById('add-btn') as HTMLButtonElement;

  addBtn.addEventListener('click', () => {
  const item = (document.getElementById('item') as HTMLInputElement).value;
  const quantity = (document.getElementById('quantity') as HTMLInputElement).value;
  const value = (document.getElementById('value') as HTMLInputElement).value;

  updateConfirmationModal(item, quantity, value);
});

  document.querySelectorAll('.bi-trash').forEach((trash) => { 
    trash.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      const index = Number(target.dataset.index);
      const item = target.dataset.item;
      const quantity = target.dataset.quantity;
      const value = target.dataset.value;

      const modalItem = document.getElementById('removeModalItem') as HTMLSpanElement;
      const modalQuantity = document.getElementById('removeModalQuantity') as HTMLSpanElement;
      const modalValue = document.getElementById('removeModalValue') as HTMLSpanElement;
      modalItem.textContent = item || '';
      modalQuantity.textContent = quantity || '';
      modalValue.textContent = `${value}` || '';

      const modal = document.querySelector('#removeModal') as HTMLElement;
      modal.dataset.index = index.toString();
    });
  });

  updateBalance(); 
}

renderTable();
