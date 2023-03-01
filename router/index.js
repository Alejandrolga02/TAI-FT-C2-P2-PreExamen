const validator = require("../functions/validators/validator");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	const params = {
		titulo: "Formulario",
		numBoleto: req.body.numBoleto || undefined,
		destino: req.body.destino || undefined,
		cliente: req.body.cliente || undefined,
		edad: parseInt(req.body.edad) || undefined,
		tipoViaje: req.body.tipoViaje || undefined,
		precio: parseFloat(req.body.precio) || undefined,
		valid: undefined,
	};

	res.render("index.html", params);
});

router.post("/", (req, res) => {
	const params = {
		titulo: "Formulario",
		numBoleto: req.body.numBoleto || undefined,
		destino: req.body.destino || undefined,
		cliente: req.body.cliente || undefined,
		edad: parseInt(req.body.edad) || undefined,
		tipoViaje: req.body.tipoViaje || undefined,
		precio: parseFloat(req.body.precio) || undefined,
		valid: false,
	};

	if (validator.validarEdad(params.edad) && validator.validarPrecio(params.precio)) {
		params.valid = true;
	}

	res.render("index.html", params);
});

// La pagina del error va al final de los get/post
router.use((req, res, next) => {
	res.status(404).render("error.html", { titulo: "Pagina no encontrada" });
	// res.status(404).sendFile(__dirname + "/public/error.html");
});

module.exports = router;
