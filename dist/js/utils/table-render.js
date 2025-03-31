import { getTransactions } from './storage.js';
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
      <td>${transaction.value}</td>
      <td class="d-none d-md-flex">
        <i class="bi bi-trash"
        data-bs-toggle="modal"
        data-bs-target="#removeModal" 
        data-index="${index}"></i>
      </td>
    `;
        tbody.appendChild(row);
    });
}
