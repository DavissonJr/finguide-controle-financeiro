import { updateBalance } from './updateTotalPrice.js';
import { getTransactions } from './storage.js';
import { updateConfirmationModal } from '../utils/update-modal.js';
const tbody = document.querySelector('tbody');
export function renderTable() {
    tbody.innerHTML = '';
    const transactions = getTransactions();
    transactions.forEach((transaction, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
      <th scope="row">${transaction.type === 'Compra' ? '-' : '+'}</th>
      <td>${transaction.item}</td>
      <td>${transaction.quantity}</td>
      <td>R$${transaction.value}</td>
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
    const addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', () => {
        const item = document.getElementById('item').value;
        const quantity = document.getElementById('quantity').value;
        const value = document.getElementById('value').value;
        updateConfirmationModal(item, quantity, value);
    });
    document.querySelectorAll('.bi-trash').forEach((trash) => {
        trash.addEventListener('click', (event) => {
            const target = event.target;
            const index = Number(target.dataset.index);
            const item = target.dataset.item;
            const quantity = target.dataset.quantity;
            const value = target.dataset.value;
            const modalItem = document.getElementById('removeModalItem');
            const modalQuantity = document.getElementById('removeModalQuantity');
            const modalValue = document.getElementById('removeModalValue');
            modalItem.textContent = item || '';
            modalQuantity.textContent = quantity || '';
            modalValue.textContent = `R$${value}` || '';
            const modal = document.querySelector('#removeModal');
            modal.dataset.index = index.toString();
        });
    });
    updateBalance();
}
renderTable();
