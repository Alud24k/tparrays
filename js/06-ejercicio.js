function perimetro(a, b) {
  return 2 * (a + b);
}

const ladoA = parseFloat(prompt("Introduzca la longitud del lado A:"));
const ladoB = parseFloat(prompt("Introduzca la longitud del lado B:"));

const resultado = perimetro(ladoA, ladoB);
console.log(`El perímetro del rectángulo es de ${resultado} unidades.`);
