function meses() {
  const nombreMeses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  document.write(`<h1>Lista de meses: </h1>`);
  for (let i = 0; i < nombreMeses.length; i++) {
    document.write(`<p>- ${nombreMeses[i]}</p>`);
  }
}

meses()