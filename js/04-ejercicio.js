function numeroPar(numero) {
  if (numero % 2 === 0) {
    return("es par");
  } else {
    return("es impar");
  }
}

let num = parseInt(prompt("Ingrese un número"));
document.write(`El número ${num} ${numeroPar(num)}`);
