const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { ObjectId } = require("mongodb");
const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;
const jwt = require("jsonwebtoken");
const secretKey = "código-secret";

const app = express();
const port = 5038;

app.use(cors());
app.use(bodyParser.json());

const CONNECTION_STRING =
    "mongodb+srv://lennyrm343:n5OGPXWpTXyI1d99@cluster0.s0prdkg.mongodb.net/?retryWrites=true&w=majority";
const DATABASE_NAME = "RegistroProveedoresDB";
let database;

app.listen(port, () => {
    MongoClient.connect(CONNECTION_STRING, (error, client) => {
        if (error) {
            console.error("Error al conectar a MongoDB:", error);
        } else {
            database = client.db(DATABASE_NAME);
            console.log("Conectado a la base de datos MongoDB");
        }
    });
});

app.get("/api/EntidadesMunicipios/Entidades", (request, response) => {
    database
        .collection("Entidades")
        .find({})
        .toArray((error, result) => {
            if (error) {
                console.error("Error al obtener las Entidades:", error);
                response.status(500).json({ error: "Error al obtener las Entidades" });
            } else {
                response.json(result);
            }
        });
});

app.get("/api/EstadoProveedores", (request, response) => {
    database
        .collection("EstadoProveedores")
        .find({})
        .toArray((error, result) => {
            if (error) {
                console.error("Error al obtener los estados de los proveedores");
                response
                    .status(500)
                    .json({ error: "Error al obtener los estados de proveedores" });
            } else {
                response.json(result);
            }
        });
});

app.get("/api/EntidadesMunicipios/Municipios", (request, response) => {
    database
        .collection("Municipios")
        .find({})
        .toArray((error, result) => {
            if (error) {
                console.error("Error al obtener los Municipios");
                response.status(500).json({ error: "Error al obtener los Municipios" });
            } else {
                response.json(result);
            }
        });
});

app.post("/api/RegistrarProveedor", (request, response) => {
    const nuevoProveedor = request.body;
    if (nuevoProveedor) {
        database.collection("Proveedores").insertOne(nuevoProveedor, (error) => {
            if (error) {
                console.error("Error al agregar el proveedor: ", error);
                response.status(500).json({ error: "Error al agregar el proveedor" });
            } else {
                response.json({ message: "Proveedor añadido exitosamente" });
            }
        });
    } else {
        response.status(400).json({ error: "el proveedor no puede estar vacía" });
    }
});

app.post("/api/usuarios/login", (request, response) => {
    const usuario = request.body;
    const query = {
        nombreUsuario: usuario.nombreUsuario,
        contraseña: usuario.contraseña,
    };

    database
        .collection("usuarios")
        .find(query)
        .toArray((error, result) => {
            if (error) {
                console.log("Error al obtener usuarios");
                response.status(500).json({ error: "Error al obtener usuario" });
            } else {
                if (result.length > 0) {
                    // Usuario autenticado correctamente, generamos el token
                    const token = jwt.sign(
                        { nombreUsuario: usuario.nombreUsuario },
                        secretKey,
                        { expiresIn: "1h" }
                        
                    );
                    console.log("...done");
                    // Devolvemos el token como parte de la respuesta
                    response.status(200).json({ success: true, token });
                } else {
                    response.status(404).json({ success: false });
                }
            }
        });
});
