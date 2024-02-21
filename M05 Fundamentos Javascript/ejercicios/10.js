function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
let dateObject = new date (2024, 2, 10);

if (Object.prototype.toString.call(dateObject) === "[object Date]" && !isNaN(dateObject)) {
  return true;
} else {
  return false; 
}
}
