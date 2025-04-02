import { showExtract, showNewTransaction } from "../types/changeDisplay.js";
import { cleanButtons } from "../types/cleanInputs.js";
import { checkFormValidity } from "../types/enableAddBtn.js";
import { addTransaction } from "../types/form-handler.js";
import { attachCurrencyFormatter, formatCurrency } from "../types/MaskValue.js";

document.addEventListener("DOMContentLoaded", () => {
 
 
  const transactionContainer = document.getElementById("first-container") as HTMLElement | null;
  const extractContainer = document.getElementById("second-container") as HTMLElement | null;
  const newTransactionButton = document.getElementById("new-transition-button") as HTMLButtonElement | null;
  const cleanBtn = document.getElementById("cleanBtn") as HTMLAnchorElement | null;

  if (newTransactionButton && transactionContainer && extractContainer) {
    newTransactionButton.addEventListener("click", (event) => 
      showNewTransaction(event, transactionContainer, extractContainer)
    );
  }

  if (cleanBtn) {
    cleanBtn.addEventListener("click", cleanButtons);
  }

  checkFormValidity();
  attachCurrencyFormatter("value");

  addTransaction();

});