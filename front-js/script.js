let acumulador = 1;
function agregarUno() {
    let contador = document.getElementById("contador");
    let factor = document.getElementById("factorMultiplicador").value;

    contador.innerHTML = factor*acumulador;
    acumulador++;
}