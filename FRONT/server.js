//Importamos los modulos requeridos
const express = require('express');
const app = express();
require('dotenv').config()
const exphbs = require('express-handlebars')
const routeViews = require('./routes/views.routes')
const path = require('path')

//Middlewares globales
app.use(express.json())

//app.use(midd.limiter);
app.use(express.urlencoded({ extended: true }));

//configuraciones
app.set('views', path.join(__dirname, './views'))
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  partialsDir: path.join(app.get('views'), 'partials'),
  layoutsDir: path.join(app.get('views'), 'layouts'),
  extname: '.hbs',  
  //helpers: require('./server/helpers')
}))
app.set('view engine', '.hbs');

//static files

app.use('/public',express.static(path.join(__dirname, './public/')))



//iniciamos nuestro servidor
async function inicioServer() {
    try {
        app.listen(process.env.PORT, function () {
            console.log(`Sistema iniciado en http://${process.env.HOST}:${process.env.PORT}`);
        });
      } catch (error) {
        console.error('No se pudo conectar correctamebte con la Base de datos:', error);
      }
}

inicioServer();

//Routes
routeViews(app)