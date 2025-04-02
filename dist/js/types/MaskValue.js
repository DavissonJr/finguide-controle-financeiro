export function formatCurrency(input) {
    let value = input.value.replace(/\D/g, "");
    // verifica se o valor não está vazio antes de converter
    value = value ? (parseInt(value) / 100).toFixed(2).replace(".", ",") : "0,00";
    value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    input.value = `R$ ${value}`;
}
export function attachCurrencyFormatter(elementId) {
    const valueInput = document.getElementById(elementId);
    if (valueInput) {
        valueInput.addEventListener("input", () => formatCurrency(valueInput));
    }
    else {
        console.warn(`Elemento com ID "${elementId}" não encontrado.`);
    }
}
