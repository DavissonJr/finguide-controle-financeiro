// nova-transacao-component.ts

import { showExtract, showNewTransaction } from "../utils/changeDisplay.js";
import { cleanButtons } from "../utils/cleanInputs.js";
import { checkFormValidity } from "../utils/enableAddBtn.js";
import { addTransaction } from "../utils/form-handler.js";


document.addEventListener("DOMContentLoaded", () => {
 
  const vizualizarExtratoBtn = document.getElementById("showExtractBtn") as HTMLButtonElement | null;
  const transactionContainer = document.getElementById("first-container") as HTMLElement | null;
  const extractContainer = document.getElementById("second-container") as HTMLElement | null;
  const newTransactionButton = document.getElementById("new-transition-button") as HTMLButtonElement | null;
  const cleanBtn = document.getElementById("cleanBtn") as HTMLAnchorElement | null;

  // Adiciona event listeners (com verificações de null)
  if (vizualizarExtratoBtn && transactionContainer && extractContainer) {
    vizualizarExtratoBtn.addEventListener("click", (event) => 
      showExtract(event, transactionContainer, extractContainer)
    );
  }

  if (newTransactionButton && transactionContainer && extractContainer) {
    newTransactionButton.addEventListener("click", (event) => 
      showNewTransaction(event, transactionContainer, extractContainer)
    );
  }

  if (cleanBtn) {
    cleanBtn.addEventListener("click", cleanButtons);
  }

  checkFormValidity();

  addTransaction();

});