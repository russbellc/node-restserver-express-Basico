const express = require("express");
const cors = require("cors");

class Server {
	constructor() {
		this.app = express();
		this.puerto = process.env.PUERTO;
		this.usuarioPath = "/api/usuarios";
		console.clear();

		//Middlewares
		this.middlewares();

		//rutas de la app
		this.rutas();
	}
	middlewares() {
		//CORS
		this.app.use(cors());

		//lectura y parseo del body
		this.app.use(express.json());

		//directorio publico
		this.app.use(express.static("public"));
	}
	rutas() {
		this.app.use(this.usuarioPath, require("../routes/usuarios"));
	}
	listen() {
		this.app.listen(this.puerto, () =>
			console.log(`Servidor en el puerto: ${this.puerto}`)
		);
	}
}

module.exports = Server;
