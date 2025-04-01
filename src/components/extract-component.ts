import { showExtract } from "../types/changeDisplay.js";
import { updateSaldo } from "../types/balance.js";

const vizualizarExtratoBtn = document.getElementById("showExtractBtn") as HTMLButtonElement | null;
const transactionContainer = document.getElementById("first-container") as HTMLElement | null;
const extractContainer = document.getElementById("second-container") as HTMLElement | null;

if (vizualizarExtratoBtn && transactionContainer && extractContainer) {
    vizualizarExtratoBtn.addEventListener("click", (event) => 
      showExtract(event, transactionContainer, extractContainer)
    );
}