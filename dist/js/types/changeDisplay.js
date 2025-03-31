export const showExtract = (event, transactionContainer, extractContainer) => {
    event.preventDefault();
    transactionContainer.style.display = "none";
    extractContainer.style.display = "block";
};
export const showNewTransaction = (event, transactionContainer, extractContainer) => {
    event.preventDefault();
    transactionContainer.style.display = "block";
    extractContainer.style.display = "none";
};
