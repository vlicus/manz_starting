let nota = 40;
console.log("He realizado mi examen.");

let calificacion =
  nota < 5 ? "Insuficiente" :
  nota < 6 ? "Suficiente" :
  nota < 8 ? "Bien" :
  nota <= 9 ? "Notable" :
  "Sobresaliente";

console.log("He obtenido un: ", calificacion);

// Still "Sobresaliente" went grade goes farther than 10
