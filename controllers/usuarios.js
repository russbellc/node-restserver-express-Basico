const { response, request } = require("express");

const usuariosGet = (req = request, resp = response) => {
	const { id, desc = "sin descripcion" } = req.query;

	resp.json({
		msg: "get API - controlador",
		id,
		desc,
	});
};

const usuariosPut = (req, resp) => {
	const id = req.params.id;
	resp.json({
		msg: "put API - controlador",
		id,
	});
};

const usuariosPost = (req, resp) => {
	const { nombre, edad } = req.body;
	resp.json({
		msg: "post API - controlador",
		nombre,
		edad,
	});
};
const usuariosDelete = (req, resp) => {
	resp.json({
		msg: "delete API - controlador",
	});
};

const usuariosPatch = (req, resp) => {
	resp.json({
		msg: "patch API - controlador",
	});
};

module.exports = {
	usuariosGet,
	usuariosPut,
	usuariosPost,
	usuariosDelete,
	usuariosPatch,
};
