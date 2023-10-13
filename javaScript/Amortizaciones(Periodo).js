var formulario = document.forms.formulario_Amortizaciones_Periodo
var resultado = document.getElementById("res-Amortizaciones(Periodo)")

formulario.monto.oninput = calcularAV
formulario.renta.oninput = calcularAV
formulario.interes.oninput = calcularAV


function calcularAV() {
    let v = parseFloat(formulario.monto.value)
    let R = parseFloat(formulario.renta.value)
    let j = parseFloat((formulario.interes.value)/100)
    let total = (((Math.log10(R)-Math.log10(R-j*v)))/((Math.log10(1+j))))

    resultado.innerHTML = total.toFixed(2)
  }