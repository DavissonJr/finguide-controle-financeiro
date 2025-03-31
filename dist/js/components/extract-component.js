import { showExtract } from "../types/changeDisplay.js";
import { updateSaldo } from "../types/saldo.js";
const vizualizarExtratoBtn = document.getElementById("showExtractBtn");
const transactionContainer = document.getElementById("first-container");
const extractContainer = document.getElementById("second-container");
if (vizualizarExtratoBtn && transactionContainer && extractContainer) {
    vizualizarExtratoBtn.addEventListener("click", (event) => showExtract(event, transactionContainer, extractContainer));
}
updateSaldo();
