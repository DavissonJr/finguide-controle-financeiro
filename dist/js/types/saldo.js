export function changeSaldo() {
    let saldo = 3800;
    const saldoInHtml = document.getElementById("money");
    saldoInHtml.textContent = `R$ ${(saldo).toFixed(2).replace(".", ",")}`;
}
