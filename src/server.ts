// src/server.ts
import "reflect-metadata";
import { createConnection } from 'typeorm';
import express from 'express';
import bodyParser from 'body-parser';
import { Alumno } from './models/Alumno';
import { Asignatura } from './models/Asignatura';
import { Nota } from './models/Nota';

const app = express();
app.use(bodyParser.json());

// Conectar a la base de datos
createConnection()
    .then(() => {
        console.log("Conexión a la base de datos establecida");

        // Iniciar el servidor
        app.listen(5000, () => {
            console.log("Servidor escuchando en http://localhost:5000");
        });
    })
    .catch(error => console.error("Error al conectar a la base de datos", error));

// Rutas CRUD aquí...
