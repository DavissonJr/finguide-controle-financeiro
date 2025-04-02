import { showNewTransaction } from "../types/changeDisplay.js";
import { cleanButtons } from "../types/cleanInputs.js";
import { checkFormValidity } from "../types/enableAddBtn.js";
import { addTransaction } from "../types/form-handler.js";
import { attachCurrencyFormatter } from "../types/MaskValue.js";
document.addEventListener("DOMContentLoaded", () => {
    const transactionContainer = document.getElementById("first-container");
    const extractContainer = document.getElementById("second-container");
    const newTransactionButton = document.getElementById("new-transition-button");
    const cleanBtn = document.getElementById("cleanBtn");
    if (newTransactionButton && transactionContainer && extractContainer) {
        newTransactionButton.addEventListener("click", (event) => showNewTransaction(event, transactionContainer, extractContainer));
    }
    if (cleanBtn) {
        cleanBtn.addEventListener("click", cleanButtons);
    }
    checkFormValidity();
    attachCurrencyFormatter("value");
    addTransaction();
});
