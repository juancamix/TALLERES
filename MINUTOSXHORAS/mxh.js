const number1 = document.getElementById("horas");

const resultado = document.getElementById("result");


const calcular = document.getElementById("calcular");
calcular.addEventListener("click",Horasx);

const borra = document.getElementById("addB");
borra.addEventListener("click",borrar);

function Horasx(){
    let data1 = Number (number1.value);
    let data2 = 60;
    result.textContent = data1 / data2;
}


function borrar() {
    let Borra = number1.value
    let Borra3 = resultado.value

    if (typeof(Borra === "Number"))
    number1.value = ""
    if (typeof(Borra3 === "Number"))
    resultado.textContent = "Horas por Minutos"
    
}