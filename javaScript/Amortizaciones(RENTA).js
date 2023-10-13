var formulario = document.forms.formulario_AmortizacionesRENTA
var resultado = document.getElementById("res-Amortizaciones(RENTA)")

formulario.renta.oninput = calcularAV
formulario.tiempo.oninput = calcularAV
formulario.interes.oninput = calcularAV


function calcularAV() {
    let v = parseFloat(formulario.renta.value)
    let n = parseFloat(formulario.tiempo.value)
    let j = parseFloat((formulario.interes.value)/100)
    let total = v*(((j*(1+j)**n)))/(((1+j)**n)-1)

    resultado.innerHTML = total.toFixed(2)
}