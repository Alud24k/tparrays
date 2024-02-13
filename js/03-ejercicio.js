// Función para lanzar un dado
function lanzarDado() {
  // Generar un número aleatorio entre 1 y 6
  let numero = Math.floor(Math.random() * 6) + 1;
  return numero;
}

// Función para simular el lanzamiento de dos dados
function simularLanzamiento() {
  // Lanzar el primer dado
  let dado1 = lanzarDado();
  // Lanzar el segundo dado
  let dado2 = lanzarDado();
  // Sumar los resultados de los dos dados
  let suma = dado1 + dado2;
  // Devolver la suma
  return suma;
}

// Función para mostrar los resultados
function mostrarResultados(choto) {
  // Recorrer el array de resultados
  for (let i = 0; i < choto.length; i++) {
    // Mostrar la suma y la cantidad de apariciones
    console.log(`Suma: ${i + 2} - Apariciones: ${choto[i]}`);
  }
}

// Simular 50 lanzamientos de dos dados
const repeticiones = 50;
let resultados = new Array(11).fill(0); // Array para almacenar las apariciones de cada suma

// Lanzar los dados y registrar las apariciones de cada suma
for (let i = 0; i < repeticiones; i++) {
  let suma = simularLanzamiento();
  resultados[suma - 2]++; // Se resta 2 a la suma para acceder al índice correcto del array
}

// Mostrar los resultados
mostrarResultados(resultados);
