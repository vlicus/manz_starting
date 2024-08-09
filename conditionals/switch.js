let nota = 7;
console.log("He realizado mi examen. Mi resultado es el siguiente: ");

var calificacion;

switch (nota) {
	case 10:
		calificacion = "Sobresaliente";
		break;
	case 9:
	case 8:
		calificacion = "Notable";
		break;
	case 7:
	case 6:
		calificacion = "Bien";
		break;
	case 5:
		calificacion = "Suficiente";
		break;
	case 4:
	case 3:
	case 2:
	case 1:
		calificacion = "Insuficiente";
		break;
	default:
		//Cualquier otro caso
		calificacion = "Nota errónea";
		break;
}

console.log("He obtenido un", calificacion);
