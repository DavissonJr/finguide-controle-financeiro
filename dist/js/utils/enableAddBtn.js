const transactionType = document.getElementById('transactionType');
const item = document.getElementById('item');
const quantity = document.getElementById('quantity');
const value = document.getElementById('value');
const addBtn = document.getElementById('add-btn');
export function checkFormValidity() {
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
