export const showExtract = (event: Event, transactionContainer: HTMLElement, extractContainer: HTMLElement) => {
  event.preventDefault();
  transactionContainer.style.display = "none";
  extractContainer.style.display = "block";  
};

export const showNewTransaction = (event: Event, transactionContainer: HTMLElement, extractContainer: HTMLElement) => {
  event.preventDefault();
  transactionContainer.style.display = "block"; 
  extractContainer.style.display = "none";  
};