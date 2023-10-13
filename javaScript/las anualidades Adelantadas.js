var formulario = document.forms.formulario_las_anualidades_Adelantadas
var resultado = document.getElementById("res-f_las anualidades Adelantadas")

formulario.renta.oninput = calcularAV
formulario.tiempo.oninput = calcularAV
formulario.interes.oninput = calcularAV
formulario.monto.oninput = calcularAV


function calcularAV() {
    let r = parseFloat(formulario.renta.value)
    let n = parseFloat(formulario.tiempo.value)
    let m = parseFloat(formulario.monto.value)
    let j = parseFloat((formulario.interes.value)/100)
    let total = r*(((1+(j/m))**m)*(((1+(j/m))**(m*n))-1)/(j/m)*(j/m)/(((1+(j/m))**m)-1))


    resultado.innerHTML = total.toFixed(2)
}