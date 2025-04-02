export function closeAddModal() {
  const closeButton = document.querySelector('#confirmationModal .btn-close') as HTMLElement;
  closeButton.click(); 
  }
  
export function closeRemoveModal() {
  const closeButton = document.querySelector('#removeModal .btn-close') as HTMLElement;
  closeButton.click(); 
  }