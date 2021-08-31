//Importamos los modulos requeridos
const express = require('express');
const app = express();
require('dotenv').config()
const sequelize = require('./db/conexion.usarios');
const cors = require('cors')
const usuariosRoutes = require('./routes/usuarios.routes')
const midd = require('./middlewares/midd.usuario')
const exphbs = require('express-handlebars')

//Middlewares globales
app.use(express.json())
app.use(cors())
//app.use(midd.limiter);
app.use(express.urlencoded({ extended: true }));



//iniciamos nuestro servidor
async function inicioServer() {
    try {
        await sequelize.authenticate();
        console.log('Conección estabilizada correctamente');
        app.listen(process.env.PORT, function () {
            console.log(`Sistema iniciado en http://${process.env.HOST}:${process.env.PORT}`);
        });
      } catch (error) {
        console.error('No se pudo conectar correctamebte con la Base de datos:', error);
      }
}

inicioServer();

//Routes
usuariosRoutes(app)
