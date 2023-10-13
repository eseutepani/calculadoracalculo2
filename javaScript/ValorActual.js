var formulario = document.forms.formulario_ValorActual
var resultado = document.getElementById("res-ValorActual")

formulario.renta.oninput = calcularAV
formulario.tiempo.oninput = calcularAV
formulario.interes.oninput = calcularAV


function calcularAV() {
    let r = parseFloat(formulario.renta.value)
    let n = parseFloat(formulario.tiempo.value)
    let j = parseFloat((formulario.interes.value)/100)
    let total = r*((1-(1+j)**-n)/j)

    resultado.innerHTML = total.toFixed(2)
}