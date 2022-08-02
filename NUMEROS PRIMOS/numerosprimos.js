var cantidad = 100;
var desde = 2;
var numerosPrimos = [];

for (; desde < cantidad; desde++) {

  if (primo(desde)) {
    numerosPrimos.push(desde);
  }
  
}


function primo(numero) {

  for (var i = 2; i < numero; i++) {

    if (numero % i === 0) {
      return false;
    }

  }

  return numero !== 1;
}
console.log(numerosPrimos);