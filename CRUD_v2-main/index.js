// Importacion de módulos 
const express= require('express');
const app = express();
require('dotenv').config();
const sequelize = require('./db/conexion');
const articulosRoutes = require('./routes/articulos.routes');
// Importación rutas
const categoriasRoute = require('./routes/categorias.routes')
const cors = require('cors');

//Middlewares globales
app.use(express.json());
app.use(express.urlencoded({ extended : true}));
app.use(cors());

//inico de servidor
async function inicioServidor() {
    try {
        await sequelize.authenticate();
        console.log('Conección estabilizada correctamente.');
        app.listen(process.env.PORT , function() {
            console.log(`Sistema iniciado en http://${process.env.HOST}:${process.env.PORT}`)
        })
    } catch (error) {
        console.error('No se pudo conectar correctamente con la base o con el servidor: ', error);
    }
}

inicioServidor();

// Llamada de rutas
categoriasRoute(app);
articulosRoutes(app);