import { updateBalance } from '../types/updateBalance.js';
import { getTransactions } from './storage.js';

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
      <td>R$${transaction.value},00</td>
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

  document.querySelectorAll('.bi-trash').forEach((trash) => { 
    trash.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      const index = Number(target.dataset.index);
      const item = target.dataset.item;
      const quantity = target.dataset.quantity;
      const value = target.dataset.value;

      const modalItem = document.getElementById('modalItem') as HTMLSpanElement;
      const modalQuantity = document.getElementById('modalQuantity') as HTMLSpanElement;
      const modalValue = document.getElementById('modalValue') as HTMLSpanElement;
      modalItem.textContent = item || '';
      modalQuantity.textContent = quantity || '';
      modalValue.textContent = value || '';

      const modal = document.querySelector('#removeModal') as HTMLElement;
      modal.dataset.index = index.toString();
    });
  });

  updateBalance(); 
}

renderTable();
