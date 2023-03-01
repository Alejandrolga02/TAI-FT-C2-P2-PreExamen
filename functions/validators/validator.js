function validarEdad(edad) {
	// Validar la edad
	if (typeof edad !== "number" || isNaN(edad) || edad < 0 || edad > 120) {
		return false;
	}
	return true;
}

function validarPrecio(precio) {
	if (typeof precio === "number" && !isNaN(precio) && precio > 0) {
		return true; // Es un número válido
	} else {
		return false; // No es un número válido
	}
}

module.exports = { validarEdad, validarPrecio };
