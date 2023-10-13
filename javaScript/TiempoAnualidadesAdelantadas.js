var formulario = document.forms.formulario_TiempoAnualidadesAdelantadas
var resultado = document.getElementById("res-TiempoAnualidadesAdelantadas")

formulario.monto.oninput = calcularAV
formulario.renta.oninput = calcularAV
formulario.interes.oninput = calcularAV


function calcularAV() {
    let s = parseFloat(formulario.monto.value)
    let R = parseFloat(formulario.renta.value)
    let i = parseFloat((formulario.interes.value)/100)
    let total = (((Math.log10(s*i+R*(1+i))-Math.log10(R*(1+i))))/((Math.log10(1+i))))

    resultado.innerHTML = total.toFixed(2)
  }