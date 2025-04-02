// remove a máscara de moeda e retorna o valor numérico
export function cleanCurrency(value: string): number {
    const cleanedValue = value.replace(/[^\d,-]/g, '').replace(',', '.');
    return parseFloat(cleanedValue) || 0;
  }
  
  