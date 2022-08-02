const number1 = document.getElementById("horas");
const number2 = document.getElementById("valor");

const resultado = document.getElementById("result");


const calcular = document.getElementById("calcular");
calcular.addEventListener("click",HorasRetorno);

const borra = document.getElementById("addB");
borra.addEventListener("click",borrar);

function HorasRetorno(){
    let data1 = Number (number1.value);
    let data2 = Number (number2.value);
    result.textContent = data1 * data2;
}
function borrar() {
    let Borra = number1.value
    let Borra2 = number2.value
    let Borra3 = resultado.value

    if (typeof(Borra === "Number"))
    number1.value = ""
    if (typeof(Borra2 === "Number"))
    number2.value = ""
    if (typeof(Borra3 === "Number"))
    resultado.textContent = "Salario por mes"
    
}