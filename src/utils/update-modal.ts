export function updateConfirmationModal(item: string, quantity: string, value: string): void {
    const modalItem = document.getElementById('modalItem') as HTMLSpanElement;
    const modalQuantity = document.getElementById('modalQuantity') as HTMLSpanElement;
    const modalValue = document.getElementById('modalValue') as HTMLSpanElement;
  
    modalItem.textContent = item;
    modalQuantity.textContent = quantity;
    modalValue.textContent = `R$ ${value}`;
  }