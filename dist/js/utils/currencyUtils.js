// remove a máscara de moeda e retorna o valor numérico
export function cleanCurrency(value) {
    const cleanedValue = value.replace(/[^\d,-]/g, '').replace(',', '.');
    return parseFloat(cleanedValue) || 0;
}
