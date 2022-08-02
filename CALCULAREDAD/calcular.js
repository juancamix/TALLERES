const number1 = document.getElementById("edad");

const result = document.getElementById("result");
const calcular = document.getElementById("calcular");
const addR = document.getElementById("addR");
const borra = document.getElementById("addB");

calcular.addEventListener("click",CalcularEdad);
borra.addEventListener("click",borrar);

function CalcularEdad(){
    let data1 = Number (number1.value);
    let año = 2022;
    result.textContent = año - data1;
}
function borrar() {
    let Borra = number1.value
    let Borra2 = result.value

    if (typeof(Borra === "Number"))
    number1.value = ""

    if (typeof(Borra2 === "Number"))
    result.textContent = "Año de nacimiento"
    
}