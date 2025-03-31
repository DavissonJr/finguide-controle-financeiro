const transactionType = document.getElementById('transactionType') as HTMLSelectElement;
const item = document.getElementById('item') as HTMLInputElement;
const quantity = document.getElementById('quantity') as HTMLInputElement;
const value = document.getElementById('value') as HTMLInputElement;
const addBtn = document.getElementById('add-btn') as HTMLButtonElement;

export function checkFormValidity(): void {
  const isValid = item.value.trim() !== '' && Number(quantity.value) > 0 && value.value.trim() !== '';
  addBtn.disabled = !isValid;
}

addBtn.addEventListener('click', (event) => {
  event.preventDefault();
});

[item, quantity, value].forEach((input) => {
  input.addEventListener('input', checkFormValidity);
});

transactionType.addEventListener('change', checkFormValidity);