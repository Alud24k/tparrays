function mostrarTablaMultiplicar(numero) {
  for (let i = 0; i < 10; i++) {
    const resultado = numero * (i + 1);
    console.log(`${numero} x ${i + 1} = ${resultado}`);
  }
}

const numero = parseFloat(prompt("Ingrese un numero"));

mostrarTablaMultiplicar(numero);
