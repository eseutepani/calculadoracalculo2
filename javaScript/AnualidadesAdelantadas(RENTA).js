var formulario = document.forms.formulario_AnualidadesAdelantadasRENTA
var resultado = document.getElementById("res-AnualidadesAdelantadas(RENTA)")

formulario.monto.oninput = calcularAV
formulario.tiempo.oninput = calcularAV
formulario.interes.oninput = calcularAV



function calcularAV() {
    let s = parseFloat(formulario.monto.value)
    let n = parseFloat(formulario.tiempo.value)
    let i = parseFloat((formulario.interes.value)/100)
    let total = s*(i/(((1+i)**n)-1)*(1/(1+i)))

    resultado.innerHTML = total.toFixed(2) 
}