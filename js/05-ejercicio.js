function analizarCadena(cadena) {
  const cadenaMinuscula = cadena.toLowerCase();

  if (cadena === cadenaMinuscula) {
    return "La cadena está en minúsculas.";
  } else if (cadena === cadenaMinuscula.toUpperCase()) {
    return "La cadena está en mayúsculas.";
  } else {
    return "La cadena tiene una mezcla de mayúsculas y minúsculas.";
  }
}

const frase = prompt("Ingrese una frase o cadena de texto");

document.write(analizarCadena(frase));
