function lanzarDado() {
  let numero = Math.floor(Math.random() * 6) + 1;
  return numero;
}

function simularLanzamiento() {
  let dado1 = lanzarDado();
  let dado2 = lanzarDado();
  let suma = dado1 + dado2;
  return suma;
}

function mostrarResultados(resultado) {
  for (let i = 0; i < resultado.length; i++) {
    console.log(`Suma: ${i + 2} - Apariciones: ${resultado[i]}`);
  }
}

const repeticiones = 50;
let resultados = new Array(11).fill(0);

for (let i = 0; i < repeticiones; i++) {
  let suma = simularLanzamiento();
}

mostrarResultados(resultados);
