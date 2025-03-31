export function changeSaldo(){ 
let saldo: number = 3800;
const saldoInHtml: HTMLSpanElement = document.getElementById("money") as HTMLSpanElement;
saldoInHtml.textContent = `R$ ${(saldo).toFixed(2).replace(".", ",")}`;
}