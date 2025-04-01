export function updateConfirmationModal(item, quantity, value) {
    const modalItem = document.getElementById('modalItem');
    const modalQuantity = document.getElementById('modalQuantity');
    const modalValue = document.getElementById('modalValue');
    modalItem.textContent = item;
    modalQuantity.textContent = quantity;
    modalValue.textContent = `R$ ${value}`;
}
